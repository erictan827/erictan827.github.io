<?php
    /**
    * 入口文件
    * 注意事项：
    */

    // sleep(2);
    
    // 载入依赖
    include __DIR__.'/inc/config.php';
    include __DIR__.'/inc/common.php';
    
    // options请求
    if($_SERVER['REQUEST_METHOD']==='OPTIONS'){
        Common::response(100);
    }

    // 请求路径
    $requestUrl = explode('/', $_SERVER['REQUEST_URI']);

    // 模块路径
    $path = __DIR__.'/route/'.$requestUrl[2].'.php';

    // 进入路由
    if(is_file($path)){
        // 实例化类
        include $path;
        $controllerName = ucfirst($requestUrl[2]);
        $controller = new $controllerName;
        $method = $requestUrl[3];

        // 执行请求
        if(method_exists($controller, $method)){
            $controller -> $method();
        }else{
            Common::response(404);
        }
    }else{
        Common::response(404);
    }

?>