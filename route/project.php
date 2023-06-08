<?php
/**
 * 项目模块
 */

include __DIR__ . '/sql.php';
class Project extends Sql
{

    /**
     * 上传文件，自动创建项目
     */
    public function upload()
    {
        // 参数
        $createrId = $_POST['createrId'];
        $time = time();
        $groupId = $_POST['groupId'];
        $fileType = strtolower($_POST['fileType']);
        $filePath = '';

        // 处理文件
        /*
                 if($_POST['file'] == 'nofile'){
                     $filePath = $_POST['filePath'];
                 }else{
                     $lastName = array_pop(explode('.', $_FILES["file"]["name"]));
                     $fileName = $time.'.'.$lastName;
                     $path = './img/project/'.$fileName;
                     move_uploaded_file($_FILES["file"]["tmp_name"], $path);
                     $filePath = "/img/project/$fileName";
                 }
                 */

        // Save Raw File
        $lastName = array_pop(explode('.', $_FILES["file"]["name"]));
        $fileName = $time;
        $fileName = $time . '-0';
        $path = './img/project/v2/raw/' . $fileName . '.' . $lastName;
        move_uploaded_file($_FILES["file"]["tmp_name"], $path);

        if ($fileType == 'pdf') {
            $oImgK = new Imagick();
            $oImgK->setResolution(96, 96);
            $oImgK->SetColorspace(Imagick::COLORSPACE_SRGB);
            $oImgK->readimage($path);
            $oImgK->setImageFormat("jpg");

            //$imgNum = $oImgK->getNumberImages() ; 
            $imgNum = 1;

            $oImgK->resetIterator();
            $oImgK = $oImgK->appendImages(true);
            //$oImgK->setImageCompression(imagick::COMPRESSION_JPEG);
            //$oImgK->setImageCompressionQuality(90);
            $oImgK->setImageBackgroundColor('white');
            $oImgK->setImageAlphaChannel(imagick::ALPHACHANNEL_REMOVE);
            $oImgK->mergeImageLayers(imagick::LAYERMETHOD_FLATTEN);
            $oImgK->writeImages('./img/project/v2/content/' . $fileName . '.jpg', true);
            $oImgK->clear();

            $oImgK_Thumbnail = new Imagick();
            $oImgK_Thumbnail->setResolution(96, 96);
            $oImgK_Thumbnail->SetColorspace(Imagick::COLORSPACE_SRGB);
            $oImgK_Thumbnail->readimage($path . '[0]');
            $oImgK_Thumbnail->setImageFormat("jpg");
            $oImgK_Thumbnail->thumbnailImage(300, 300, true, true);
            $oImgK_Thumbnail->setImageBackgroundColor('white');
            $oImgK_Thumbnail->setImageAlphaChannel(imagick::ALPHACHANNEL_REMOVE);
            $oImgK_Thumbnail->mergeImageLayers(imagick::LAYERMETHOD_FLATTEN);
            $oImgK_Thumbnail->writeImages('./img/project/v2/thumbnail/' . $fileName . '.jpg', true);
            $oImgK_Thumbnail->clear();
        } else {
            $oImgK = new Imagick();
            $oImgK->setResolution(96, 96);
            $oImgK->SetColorspace(Imagick::COLORSPACE_SRGB);
            $oImgK->readimage($path);
            $oImgK->setImageFormat("jpg");
            $imgNum = 1;
            //$oImgK->setImageCompression(imagick::COMPRESSION_JPEG);
            //$oImgK->setImageCompressionQuality(90);
            $oImgK->writeImages('./img/project/v2/content/' . $fileName . '.jpg', true);
            $oImgK->thumbnailImage(300, 300, true, true);
            $oImgK->writeImages('./img/project/v2/thumbnail/' . $fileName . '.jpg', true);
            $oImgK->clear();
        }


        // 插入数据
        $this->db->query("
                insert into project_list (creater_id, title, create_time, img_url, pages, group_id) 
                values ('$createrId', '未命名的圖片', '$time', '$fileName', '$imgNum', '$groupId')
            ");

        // 更新项目封面
        $this->db->query("update project_group set cover = '$fileName' where id = '$groupId'");
        Common::response();
    }

    public function uploadMultiple()
    {
        // Parameters
        $createrId = $_POST['createrId'];
        $time = time();
        $groupId = $_POST['groupId'];
        $fileType = strtolower($_POST['fileType']);
        $filePath = '';

        // Loop through uploaded files
        $imgNum = 0; // Initialize image counter

        foreach ($_FILES["file"]["tmp_name"] as $index => $tmpName) {
            $lastName = explode('.', (string) $_FILES["file"]["name"][$index]);
            $lastName = array_pop($lastName);

            $fileName = $time . '-' . $index;
            $targetPath = "./img/project/testimg/raw/" . $fileName . '.' . $lastName;
            move_uploaded_file($tmpName, $targetPath);

            $path = "./img/project/testimg/raw/" . $fileName . '.' . $lastName;
            $image = new Imagick();
            $image->readImage($path);

            $oImgK = new Imagick();
            $oImgK->setResolution(96, 96);
            $oImgK->SetColorspace(Imagick::COLORSPACE_SRGB);
            $oImgK->readimage($path);
            $oImgK->setImageFormat("jpg");

            //$oImgK->setImageCompression(imagick::COMPRESSION_JPEG);
            //$oImgK->setImageCompressionQuality(90);
            $oImgK->writeImages('./img/project/testimg/content/' . $fileName . '.jpg', true);
            $oImgK->thumbnailImage(300, 300, true, true);
            $oImgK->writeImages('./img/project/testimg/thumbnail/' . $fileName . '.jpg', true);
            $oImgK->clear();

            // Insert data
            $this->db->query("
            insert into board_list (creater_id, title, create_time, img_url, pages, group_id) 
            values ('$createrId', '未命名的圖片', '$time', '$fileName', '1', '$groupId')
        ");

            // Increment the image counter
            $imgNum++;
        }

        // Update project cover
        $this->db->query("update board_group set cover = '$time-0' where id = '$groupId'");

        // Send the response
        echo json_encode([
            "success" => true,
            "message" => "上传成功",
            "imgNum" => $imgNum // Include the image count in the response
        ]);

        exit;
    }


    /**
     * 获取项目列表
     */
    public function list()
    {
        $id = $_GET['id'];
        $result = $this->db->query("select p.*, u.user_name from project_list p, user_list u where p.creater_id = u.id and group_id = '$id'");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }

    public function list_board()
    {
        $id = $_GET['id'];
        $result = $this->db->query("select p.*, u.user_name from board_group p, user_list u where p.creater_id = u.id and project_id = '$id'");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }

    public function list_library()
    {
        $id = $_GET['id'];
        $result = $this->db->query("select p.*, u.user_name from board_list p, user_list u where p.creater_id = u.id and group_id = '$id'");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }

    public function list_u_library()
    {
        $id = $_GET['id'];
        $result = $this->db->query("select p.*, u.user_name from board_list p, user_list u where p.creater_id = u.id and group_id = '$id'");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }
    public function list_u_edit_library()
    {
        $group_id = $_GET['group_id'];

        $result = $this->db->query("SELECT a.*, b.img_url, a.preference_name
        FROM `preference_group` AS a
        LEFT JOIN `board_list` AS b ON a.board_id = b.group_id
        WHERE a.group_id = '$group_id';");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }

    public function list_u_selected_library()
    {
        $group_id = $_GET['group_id'];

        $result = $this->db->query("SELECT a.*, b.img_url, a.preference_name,
    CASE WHEN c.images_id IS NOT NULL THEN true ELSE false END AS selected
    FROM `preference_group` AS a
    LEFT JOIN `board_list` AS b ON a.board_id = b.group_id
    LEFT JOIN `preference_list` AS c ON a.group_id = c.group_id AND b.img_url = c.images_id
    WHERE a.group_id = '$group_id';");

        $result = Common::fetch($result);
        Common::response(200, $result);
    }
    /**
     * 移除项目
     */
    public function del()
    {
        $id = $_GET['id'];

        // 获取组ID
        $gid = $this->db->query("select group_id from project_list where id = '$id'");
        $gid = Common::fetch($gid)[0]['group_id'];

        // 删除当前记录
        $this->db->query("delete from project_list where id = '$id'");

        // 重新选择一张封面
        $cover = $this->db->query("select img_url from project_list where group_id = '$gid' order by create_time desc limit 1");
        $cover = Common::fetch($cover)[0]['img_url'];
        $this->db->query("update project_group set cover = '$cover' where id = '$gid'");

        Common::response();
    }

    public function librarydel()
    {
        $id = $_GET['id'];

        // 获取组ID
        $gid = $this->db->query("select group_id from board_list where id = '$id'");
        $gid = Common::fetch($gid)[0]['group_id'];

        // 删除当前记录
        $this->db->query("delete from board_list where id = '$id'");

        // 重新选择一张封面
        $cover = $this->db->query("select img_url from board_list where group_id = '$gid' order by create_time desc limit 1");
        $cover = Common::fetch($cover)[0]['img_url'];
        $this->db->query("update board_group set cover = '$cover' where id = '$gid'");

        Common::response();
    }

    /**
     * 重命名
     */
    public function rename()
    {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $this->db->query("update project_list set title = '$title' where id = '$id'");
        Common::response(200);
    }

    public function add_preference()
    {
        $project_id = $_POST['project_id'];
        $name = $_POST['name'];
        $selectedImages = $_POST['images'];

        $currentDateTime = new DateTime();
        $groupId = intval($currentDateTime->format('YmdHis'));
        $groupId = str_pad($groupId, 11, '0', STR_PAD_LEFT);
        $groupId += 70000000000;

        $currentDateTime = new DateTime();
        $currentTime = intval($currentDateTime->format('YmdHis'));

        $this->db->query("INSERT INTO preference_group (group_id, preference_name, last_edit, board_id) VALUES ('$groupId', '$name', '$currentTime','$project_id');");

        $imagesArray = explode(',', $selectedImages); // Split the selectedImages string into an array
        foreach ($imagesArray as $image) {
            $this->db->query("INSERT INTO preference_list (images_id, group_id, board_id) VALUES ('$image', '$groupId', '$project_id');");
        }

        Common::response(200);
    }


    public function list_preferences()
    {
        $id = $_GET['id'];
        $result = $this->db->query("SELECT * FROM preference_group WHERE board_id = $id");
        $result = Common::fetch($result);
        Common::response(200, $result);
    }



    public function updateStatus($id, $newExpiration)
    {

        $subscription = '1';


        $currentDateTime = date("Y-m-d H:i:s");
        $get_subscription = $this->db->query("SELECT subscription from user_list WHERE id = '$id'");
        $result = $get_subscription->fetch_assoc();
        $subscription_result = $result['subscription'];

        if ($subscription_result == '0') {

            if ($newExpiration >= $currentDateTime) {
                $subscription = '0';
                $status = '0';
            } else if ($newExpiration <= $currentDateTime) {
                $subscription = '0';
                $status = '1';
            }

        } else if ($subscription_result == '1') {
            $subscription = '1';
            $status = '0';
        }

        $this->db->query("UPDATE user_list SET status = '$status', subscription = '$subscription' WHERE id = '$id'");
        Common::response(200);
    }

    public function updateExpiration()
    {
        $id = $_POST['id'];
        $id = $id - 1000000; // Subtract 1000000 from $id
        $newExpiration = $_POST['newExpiration'];
        $this->db->query("UPDATE user_list SET expired_time = '$newExpiration' WHERE id = '$id'");
        $this->updateStatus($id, $newExpiration);

        Common::response(200);
    }

    public function del1()
    {
        $preference_name = $_GET['preference_name'];
        $sql = "DELETE FROM preference_group WHERE preference_name = '$preference_name'";
        $this->db->query("DELETE FROM preference_group WHERE preference_name = '$preference_name'");
        Common::response(200);
    }


    public function updateMaxProjects()
    {
        $id = $_POST['id'];
        $id = $id - 1000000; // Subtract 1000000 from $id
        $max_projects = $_POST['max_projects'];
        $this->db->query("UPDATE user_list set max_projects = '$max_projects' WHERE id = '$id'");
        Common::response(200);
    }

    public function updateSubscriptionChange()
    {
        $subscription = $_POST['subscription'];
        $id = $_POST['id'];
        $id = $id - 1000000; // Subtract 1000000 from $id
        $currentDateTime = date("Y-m-d H:i:s");

        if ($subscription == "Free Plan") {
            $subscription = '0';

            $get_expired_time = $this->db->query("select expired_time from user_list where id = '$id'");
            $result = $get_expired_time->fetch_assoc();
            $expired_time_result = $result['expired_time'];

            if ($expired_time_result >= $currentDateTime) {
                $status = '0';
            } else if ($expired_time_result <= $currentDateTime) {
                $status = '1';
            }

        } else if ($subscription == "Pro Plan") {
            $subscription = '1';
            $status = '0';
        }

        $this->db->query("UPDATE user_list SET status = '$status', subscription = '$subscription' WHERE id = '$id'");
        Common::response(200);
    }
    /**
     * 获取项目详情
     */
    public function get()
    {
        $id = $_GET['id'];
        $result = $this->db->query("select * from project_list where id = '$id'");
        $result = Common::fetch($result)[0];

        $pid = $result['id'];
        //$marks = $this -> db -> query("select * from mark_list where project_id = '$pid'");
        $marks = $this->db->query("SELECT m.*, u.user_name, r.content AS playback FROM mark_list m
											LEFT JOIN user_list u ON m.creater_id = u.id
											LEFT JOIN mark_recording r ON m.id = r.mark_id
											where project_id = '$pid'");
        $marks = Common::fetch($marks);

        $result['marks'] = $marks;
        Common::response(200, $result);
    }
}
?>