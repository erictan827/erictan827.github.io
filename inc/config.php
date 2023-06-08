<?php
    /*
    * 全局配置文件
    */

    // 跨域设置
    // header('Access-Control-Allow-Origin:*');

    // 字符集
    header("Content-type: text/html; charset=utf-8");

    // 默认时区 
    date_default_timezone_set('Asia/Shanghai');

    // 域名
    define('APP_HOST', 'http://simplerevise.com');
    

    // 全局响应状态码
    define('APP_RES', [
        '200' => '请求成功',
        '300' => '程序错误',
        '400' => '权限不足',
        '401' => '获取用户信息失败',
        '404' => '接口不存在'
    ]);
?>