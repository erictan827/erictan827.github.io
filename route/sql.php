<?php
    /**
    * 全局SQL类
    */
    
    class Sql{

        /**
         * 构造函数，连接数据库
         */
        function __construct (){
            // 连接数据库
            @$this -> db = new Mysqli('8.210.236.73', 'simplerevise', 'simplerevise', 'simplerevise');
            if($this -> db -> connect_error) Common::response(300);
            else $this -> db -> query('set names utf8');
        }
    }

?>