<?php
    header('content-type:application:json;charset=utf8');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');

    require_once "jssdk.php";
    $jssdk = new JSSDK("wx1ad1fbf5d55733e9", "3ea350a154ef7e027a0ede4cba0437aa");
    $signPackage = $jssdk->GetSignPackage($_POST['url']);
    echo json_encode($signPackage);
?>