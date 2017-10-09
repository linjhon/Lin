<?php
	/*$conn = @mysql_connect("localhost", "root", "123456");
	if (!$conn) {
		die("连接数据库失败：" . mysql_error());
	}
	mysql_select_db("dangdang", $conn);//选择数据库

	mysql_query("set names uft8");//设置字符
*/
header('content-type:application:json;charset=utf8');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');



$sql=@mysql_connect('bdm256960106.my3w.com', 'bdm256960106', 'linqiang1');
  mysql_select_db('bdm256960106_db');
  mysql_query('set names utf8');
?>