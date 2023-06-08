<?php
    /**
     * 标注模块
     */

    include __DIR__.'/sql.php';
    class Canvas extends Sql {

        public function get (){
            $projectId = $_GET['id'];
            $canvasPath = '' ;
            $time = time();
			
			$result = Common::fetch($this->db->query("select * from canvas_list where project_id = '$projectId'")) ;
            Common::response(200,$result);
        }

        public function update (){
            $projectId = $_POST['projectId'];
			$createrId = $_POST['createrId'];
            $canvasPath = $_POST['canvasPath'];
            $time = time();
			
			$result = Common::fetch($this->db->query("select COUNT(*) AS canvasPath from canvas_list where project_id = '$projectId'")) ;

			if ($result[0]['canvasPath'] <= 0) {
			  $this->db->query("
					insert into canvas_list (project_id, creater_id, path, create_time, update_time)
					values ('$projectId', '$createrId', '$canvasPath', '$time', '$time')
				") ;
			} else {
			  $this->db->query("update canvas_list set path = '$canvasPath', update_time = '$time' where project_id = '$projectId'") ;
			}
            Common::response(200,$result);
        }
		
    }
?>