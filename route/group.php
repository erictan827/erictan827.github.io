<?php
    /**
     * 项目模块
     */

    include __DIR__.'/sql.php';
    class Group extends Sql {
        
        /**
         * 创建分组
         */
        public function add (){
            // 参数
            $name = $_POST['name'];
            $createrId = $_POST['createrId'];
            $time = time();
            $id = '9'.substr($time, 1);

            // 执行sql
            $this -> db -> query("
                insert into project_group (id, group_name, creater_id, create_time) 
                values ('$id', '$name', '$createrId', '$time')
            ");

            // 更新个人项目信息
            $this -> db -> query("update user_list set projects = concat(projects, ',$id') where id = '$createrId'");

            // 获取全部结果
            $result = $this -> db -> query("select projects from user_list where id = '$createrId'");
            $result = Common::fetch($result)[0]['projects'];

            Common::response(200, $result);
        }
        
public function save() {
  // Get the imageData from the request
  $imageData = json_decode($_POST['imageData'], true);

  // Access the image details
  foreach ($imageData as $image) {
    $id = $image['id'];
    $url = $image['url'];

    // Process the image data here
    // You can save the image to the database, perform validation, etc.

    // Example: Echo the image details
    echo "Image ID: $id\n";
    echo "Image URL: $url\n";
  }

  // You can send a response back to the client if needed
}

        public function add_tag (){
            $name = $_POST['name'];
            $this -> db -> query("INSERT INTO tag_list (name) VALUES ('$name');");
            Common::response();
        }


        /**
         * 获取分组列表
         */
        public function list() {
    // Automatic detection of expired groups and groups with subscription = 1

    // Retrieve group list
    $ids = $_GET['ids'];
    $createrId = $_GET['createrId'];
    
    $currentDateTime = date('Y-m-d H:i:s');
    $this->db->query("UPDATE user_list SET status = 1 WHERE expired_time <= '$currentDateTime' AND subscription = 0 AND id = '$createrId'");
    
    if ($createrId == 1 || $createrId == 50) {
        $result = $this->db->query("SELECT p.*, u.user_name, u.max_projects FROM project_group p, user_list u WHERE p.creater_id = u.id");
    } else {
        $result = $this->db->query("SELECT p.*, u.user_name, u.max_projects FROM project_group p, user_list u WHERE p.creater_id = u.id AND p.id IN ($ids)");
    }
    $result = Common::fetch($result);
    Common::response(200, $result);
}


        /**
         * 重命名
         */
        public function rename (){
            $id = $_POST['id'];
            $name = $_POST['name'];
            $this -> db -> query("update project_group set group_name = '$name' where id = '$id'");
            Common::response();
        }
        
        public function save_img_tag (){
            $name = $_POST['name'];
            $img_url = $_POST['img_url'];
            $id = $_POST['id'];
            $this -> db -> query("update board_list set tag_name = '$name' where img_url = '$img_url' and group_id = '$id'");
            Common::response();
        }
        
        public function save_own_img_tag (){
            $name = $_POST['name'];
            $img_url = $_POST['img_url'];
            $creater_id = $_POST['creater_id'];
            $this -> db -> query("update gallery_list set tag_name = '$name' where img_url = '$img_url' and creater_id = '$creater_id'");
            Common::response();
        }
        
        public function save_public_img_tag (){
            $name = $_POST['name'];
            $img_url = $_POST['img_url'];
            $this -> db -> query("update public_gallery set tag_name = '$name' where img_url = '$img_url'");
            Common::response();
        }
        
        public function save_public_img(){
            $img_url = $_POST['img_url'];
            $id = $_POST['id'];
            $title = $_POST['title'];
            $create_time = $_POST['create_time'];
            $status = $_POST['status'];
            $pages = $_POST['pages'];
            $tag_name = $_POST['tag_name'];
            $this -> db -> query("INSERT INTO public_gallery (img_url, creater_id, title, create_time, status, pages, tag_name, public) VALUES ('$img_url', '$id', '$title', '$create_time', '$status','$pages','$tag_name','1');");
            Common::response();
        }
        
         public function save_public_img_to_own(){
            $img_url = $_POST['img_url'];
            $id = $_POST['id'];
            $title = $_POST['title'];
            $create_time = $_POST['create_time'];
            $status = $_POST['status'];
            $pages = $_POST['pages'];
            $tag_name = $_POST['tag_name'];
            $group_id = $_POST['group_id'];
            
            if ($group_id == 'undefined') {
            $this->db->query("
                INSERT INTO gallery_list (img_url, creater_id, title, create_time, status, pages, tag_name) VALUES ('$img_url', '$id', '$title', '$create_time', '$status','$pages','$tag_name')");
            } else {
                $this->db->query("
                    INSERT INTO board_list (group_id, img_url, creater_id, title, create_time, status, pages, tag_name) VALUES ('$group_id' , '$img_url', '$id', '$title', '$create_time', '$status','$pages','$tag_name')");
            }
            
            
            Common::response();
        }
        
        public function list_tags()
    {
        $id = $_GET['id'];
        $result = $this->db->query("SELECT * FROM tag_list");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }
        
        public function rename_tag(){
            $id = $_POST['id'];
            $name = $_POST['name'];
            $this -> db -> query("update tag_list set name = '$name' where id = '$id'");
            Common::response();
        }
        
         public function rename_board (){
            $id = $_POST['id'];
            $name = $_POST['name'];
            $this -> db -> query("update board_group set group_name = '$name' where id = '$id'");
            Common::response();
        }

        /**
         * 移除项目
         */
    
    public function del()
{
    $id = $_GET['id'];
    $createrId = $_GET['createrId'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM project_group WHERE id = '$id'");

    // Retrieve the existing boards data from the user_list table
    $result = $this->db->query("SELECT projects FROM user_list where id = '$createrId'");
    $row = $result->fetch_assoc();
    $projects = $row['projects'];

    // Remove the specified $id from the boards data
    $updatedProjects = str_replace(','.$id, '', $projects);
    $updatedProjects = str_replace($id, '', $updatedProjects);

    // Update the user_list table with the modified boards data
    $this->db->query("UPDATE user_list SET projects = '$updatedProjects' where id = '$createrId'");

    // Send the response
    Common::response();
}

public function del_board()
{
    $id = $_GET['id'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM board_group WHERE id = '$id'");

    // Send the response
    Common::response();
}

// public function del_gallery_img()
// {
//     $img_url = $_GET['img_url'];
//     $group_id = $_GET['id'];

//     // Delete the record from the project_group table
//     // $this->db->query("DELETE FROM gallery_list WHERE img_url = '$img_url'");
//     $this->db->query("DELETE FROM board_list WHERE img_url = '$img_url and group_id = '$group_id'");

//     // Send the response
//     Common::response();
// }

public function del_gallery_img()
{
    $img_url = $_GET['img_url'];
    $group_id = $_GET['id'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM board_list WHERE img_url = '$img_url' AND group_id = '$group_id'");

    // Send the response
    Common::response();
}

public function del_own_gallery_img()
{
    $img_url = $_GET['img_url'];
    $creater_id = $_GET['id'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM gallery_list WHERE img_url = '$img_url' AND creater_id = '$creater_id'");

    // Send the response
    Common::response();
}


public function del_public_gallery_img()
{
    $img_url = $_GET['img_url'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM public_gallery WHERE img_url = '$img_url'");

    // Send the response
    Common::response();
}

public function del_preference_name()
{
    $preference_name = $_GET['preference_name'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM preference_group WHERE preference_name = '$preference_name'");

    // Send the response
    Common::response();
}

public function del_tag_name()
{
    $tag_name = $_GET['name'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM tag_list WHERE name = '$tag_name'");

    // Send the response
    Common::response();
}

        /**
         * 用户和项目绑定
         */
        public function bind (){
            $uid = $_GET['uid'];
            $pid = $_GET['pid'];
            $this -> db -> query("update user_list set projects = concat(projects, ',$pid') where id = '$uid'");
            Common::response();
        }
        
           public function add_board (){
            // 参数
            $name = $_POST['group_name'];
            $createrId = $_POST['createrId'];
            $projectId = $_POST['projectId'];
            $time = time();
            $id = '9'.substr($time, 1);

            // 执行sql
            $this -> db -> query("
                insert into board_group (id, project_id, group_name, creater_id, create_time) 
                values ('$id', '$projectId', '$name', '$createrId', '$time')
            ");

            // 更新个人项目信息
            $this -> db -> query("update user_list set boards = concat(boards, ',$id') where id = '$createrId'");

            // 获取全部结果
            $result = $this -> db -> query("select boards from user_list where id = '$createrId'");
            $result = Common::fetch($result)[0]['boards'];

            Common::response(200, $result);
        }
    }
?>