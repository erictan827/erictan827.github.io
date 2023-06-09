<?php
    /**
     * 用户模块
     */

    include __DIR__.'/sql.php';
    class User extends Sql {

        /**
         * 登录
         */
        public function login (){
            $user_name = $_POST['account'];
            $password = md5($_POST['password']);
            $result = $this -> db -> query("select * from user_list where user_name = '$user_name' and passwd = '$password'");
            $rows = Common::fetch($result);
            if(count($rows) > 0){
                if($rows[0]['status'] == '0'){
                    $r = $rows[0];
                    unset($r['passwd']);
                    $time = time();
                    $id = $r['id'];
                    $this -> db -> query("update user_list set last_time = $time where id = '$id'");
                    Common::response(200, $r, '登录成功');
                }else{
                    Common::response(401, '', '该账户已被冻结');
                }
            }else{
                Common::response(401, '', '用户名或密码错误');
            }
        }
        
        
        /**
         * 注册新账户
         */
        public function reg (){
            $userName = $_POST['account'];
            $passwd = md5($_POST['passwd']);
            $time = time();
            $expired_time = date('Y-m-d H:i:s', strtotime('+2 weeks'));
            
            $result = $this -> db -> query("select user_name from user_list where user_name = '$userName'");
            $result = Common::fetch($result);
            if(count($result) > 0){
                Common::response(201, '', '用户已存在');
            }else{
                $this -> db -> query("insert into user_list (user_name, passwd, create_time, role, projects, subscription , current_project, max_projects, expired_time) values ('$userName', '$passwd', '$time', '1', '' , '0' , '0' , '1', '$expired_time')");
                Common::response(200);
            }
        }

        /**
         * 获取用户列表
         */
        public function list()
{
    $limit = ((int)$_GET['page'] - 1) * 50;
    $result = $this->db->query("SELECT *, CHAR_LENGTH(id) AS id_length FROM user_list ORDER BY id LIMIT $limit, 50");
    $result = Common::fetch($result);
    $count = $this->db->query("SELECT COUNT(id) FROM user_list");
    $count = Common::fetch($count)[0]['COUNT(id)'];

    // Calculate character count length for each ID and count associated projects
    foreach ($result as &$row) {
        $row['characterCount'] = strlen($row['id']);

        // Fetch associated projects from project_group table
        $projects = explode(',', $row['projects']);
        $associatedProjects = $this->db->query("SELECT COUNT(id) FROM project_group WHERE id IN ('" . implode("','", $projects) . "')");
        $associatedProjectsCount = Common::fetch($associatedProjects)[0]['COUNT(id)'];

        $row['associatedProjectsCount'] = $associatedProjectsCount;
    }

    Common::response(200, [
        'count' => $count,
        'list' => $result
    ]);
}


public function max_projects() {
  $id = $_GET['id'];
  $result = $this->db->query("SELECT max_projects FROM user_list WHERE id = '$id'");
  $maxProjects = Common::fetch($result)[0]['max_projects'];
  Common::response(200, ['max_projects' => $maxProjects]);
}


        /**
         * 更改账户状态
         */
        public function off (){
            $id = $_GET['id'];
            $status = $_GET['status'];
            $this -> db -> query("update user_list set status = '$status' where id in ($id)");
            Common::response(200);
        }

        /**
         * 删除用户
         */
        public function del (){
            $id = $_GET['id'];
            $this -> db -> query("delete from user_list where id in ($id)");
            Common::response(200);
        }
        
        public function del1() {
  $preference_name = $_GET['preference_name'];
  $this->db->query("DELETE FROM preference_group WHERE preference_name = '$preference_name'");
  Common::response(200);
}

        /**
         * 修改用户名
         */
        public function rename (){
            $id = $_POST['id'];
            $name = $_POST['name'];

            // 查询是否已存在
            $result = $this -> db -> query("select id from user_list where user_name = '$name'");
            $result = Common::fetch($result);
            if(count($result) > 0){
                Common::response(201, '', 'Account already exists.');
            }else{
                $this -> db -> query("update user_list set user_name = '$name' where id = '$id'");
                Common::response(200);
            }
        }

        /**
         * 修改密码
         */
        public function repass (){
            $id = $_POST['id'];
            $password = md5($_POST['password']);
            $this -> db -> query("update user_list set passwd = '$password' where id = '$id'");
            Common::response(200);
        }


        /**
         * 添加账户
         */
        public function add (){
            $userName = $_POST['account'];
            $role = $_POST['role'];
            $password = md5('000000');
            $time = time();
            
            $result = $this -> db -> query("select user_name from user_list where user_name = '$userName'");
            $result = Common::fetch($result);
            if(count($result) > 0){
                Common::response(201, $result, '用户已存在');
            }else{
                $this -> db -> query("
                    insert into user_list (user_name, passwd, create_time, role) 
                    values ('$userName', '$passwd', '$time', $role)
                ");
                Common::response(200);
            }
        }
        

    }
?>