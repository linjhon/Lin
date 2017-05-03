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
  $query=mysql_query('SELECT * from skill');
  $data=mysql_fetch_array($query,MYSQL_ASSOC);
//   $arr;
//   $arr1;
//   $i=0;
//   while ($data=mysql_fetch_array($query,MYSQL_ASSOC)){
//         $arr["src"]=$data["src"];
//         $arr["title"]=$data["title"];
//         $arr["price"]=$data["price"];
//         $arr["priceold"]=$data["priceold"];
//         $arr["num"]=$data["miaosha"];
//         $arr1[$i++]=$arr;
//   }
  echo json_encode( $data);
    /*$data=mysql_fetch_array($query);
    print_r($data['src']);
*/