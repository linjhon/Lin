<?php
/**
 * @Author: Marte
 * @Date:   2017-03-11 21:06:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-03-18 22:23:15
 */
  header('content-type:application:json;charset=utf8');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
  include('conn.php');
  if($sql){
    $db = "SELECT * FROM project";

    $result = mysql_query($db);
    $arr = array();
    $results = array();
    while ($row = mysql_fetch_assoc($result)) {
      $results[] = $row;
    }
    echo json_encode($results);
    mysql_close($sql);
  }else{
    echo false;
  }
