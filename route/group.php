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

public function del_board_img()
{
    $img_url = $_GET['img_url'];

    // Delete the record from the project_group table
    $this->db->query("DELETE FROM board_list WHERE img_url = '$img_url'");

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