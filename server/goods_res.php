<?php


$userName = $_POST['userName'];
$userPwd = $_POST['userPwd'];

 $dsn  = 'mysql:dbname=bk2004;host=127.0.0.1;port=3306';
$user = 'root';
$pwd = 'root';

$pdo = new PDO($dsn , $user ,$pwd);  
/* $link =mysqli_connect('127.0.0.1','root','root','bk2004'); */


$sql = "INSERT INTO `users`(`username` , `password`) VALUES('{$userName}' , '{$userPwd}')";

$bool = $pdo->exec($sql);

// // 写入成功,执行结果是1,写入失败是false
if($bool == 1){
    echo json_encode('1');
}else{
    echo json_encode('0');
}