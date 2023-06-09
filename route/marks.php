<?php
    /**
     * 标注模块
     */

    include __DIR__.'/sql.php';
    class Marks extends Sql {
        /**
         * 移除标记点
         */
        public function del (){
            $id = $_GET['id'];
            $this -> db -> query("delete from mark_list where id = '$id'");
			$this -> db -> query("delete from mark_recording where mark_id = '$id'");
            Common::response(200);
        }
        
        
        /**
         * 修改标记点
         */
        public function edit (){
            $title = $_POST['title'];
            $content = $_POST['content'];
            $id = $_POST['id'];
			$rec = $_POST['rec'];
            $this -> db -> query("update mark_list set title = '$title', content = '$content' where id = '$id'");
			if ($rec != 'null') {
				$result = $this -> db -> query("select mark_id from mark_recording where mark_id = '$id'");
				if ($result->num_rows > 0) {
					$this -> db -> query("update mark_recording set content = '$rec' where mark_id = '$id'");
				} else {
				$this -> db -> query("insert into mark_recording (mark_id, content) values ('$id', '$rec')");
				}
			}
            Common::response(200);
        }


        /**
         * 添加标记点
         */
        public function add (){
            $title = $_POST['title'];
            $content = addslashes($_POST['content']);
            $projectId = $_POST['projectId'];
            $createrId = $_POST['createrId'];
            $x = $_POST['x'];
            $y = $_POST['y'];
            $num = $_POST['num'];
			$rec = $_POST['rec'];
            $time = time();
            $this -> db -> query("
                insert into mark_list (title, content, project_id, creater_id, pos_x, pos_y, num, create_time)
                values ('$title', '$content', '$projectId', '$createrId', $x, '$y', '$num', '$time')
            ");
            $result = $this -> db -> query("select * from mark_list where create_time = '$time'");
			/*
			$result = $this -> db -> query("SELECT m.*, u.user_name, r.content AS playback FROM mark_list m
											LEFT JOIN user_list u ON m.creater_id = u.id
											LEFT JOIN mark_recording r ON m.id = r.mark_id
											 where create_time = '$time'");
											*/
            $result = Common::fetch($result)[0];
			$id = $result['id'] ;
			if ($rec != 'null') {
				$this -> db -> query("insert into mark_recording (mark_id, content) values ('$id', '$rec')");
			}
			$marks = $this -> db -> query("SELECT m.*, u.user_name, r.content AS playback FROM mark_list m
											LEFT JOIN user_list u ON m.creater_id = u.id
											LEFT JOIN mark_recording r ON m.id = r.mark_id
											where m.id = '$id'");
			$result = Common::fetch($marks)[0];								
            Common::response(200, $result);
        }
    }
?>