<?php
    /*
    * 全局通用类库 
    * 所有方法都设置为静态
    */

    class Common {
        /**
         * 返回数据
         * $code：状态码，参见常量 ./config.php -> APP_RES
         * $data：返回的数据，默认为空
         */
        static function response($code = 200, $data = '', $msg = null){
            $result = [
                'code' => $code,
                'msg' => $msg == null ? APP_RES[$code] : $msg,
                'data' => $data
            ];
            die(json_encode($result, JSON_UNESCAPED_UNICODE));
        }

        /**
         * 传入一个SQL结果集，输出一个序列化之后的关联数组 
         * $data: 需要处理的数据。传入一个SQL结果集
         * $callback：遍历时，对数据进行处理，如：遍历时把unix时间戳转换成日期字符串。传入一个函数。可选
         */
        static function fetch($data, $callback = null){
            // 如果不需要处理数据，定义callback直接返回原数据
            if($callback == null){
                $callback = function($item){
                    return $item;
                };
            }

            // 处理数据
            $result = [];
            while($item = $data -> fetch_array(MYSQLI_ASSOC)){
                $item = $callback($item);
                array_push($result, $item);
            }
            return $result;
        }

        /**
         * 生成添加数据的sql
         * $sorts：需要的字段
         * $params: $_POST 或者 $_GET
         */
        static function sql_add($sorts, $params){
            $result = '(';
        
            // 拼接字段
            foreach($sorts as $item) $result = "$result $item,";

            // 去除末尾的空格和逗号
            $result = substr($result, 0, -1).') values (';

            // 拼接字段值
            foreach($sorts as $item) $result = "$result '$params[$item]',";

            // 去除末尾的空格和逗号
            $result = substr($result, 0, -1).')';

            return $result;
        }
        
        /**
         * 生成修改数据的sql
         * $sorts：需要的字段
         * $params: $_POST 或者 $_GET
         */
        static function sql_update($sorts, $params){
            $result = '';
        
            // 拼接字段
            foreach($sorts as $item) $result = "$result $item = '$params[$item]',";

            // 去除末尾的空格和逗号
            $result = substr($result, 0, -1);

            return $result;
        }

        /**
         * 生成数据ID
         */
        static function create_id (){

        }

        /**
         * 生成limit
         */
        static function limit ($page){
            $limit = ($page - 1) * 50;
            $limit .= ', 50';
            return $limit;
        }

    }

?>