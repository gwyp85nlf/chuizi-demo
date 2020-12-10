<?php

$userName = $_POST['userName'];
$userPwd = $_POST['userPwd'];

$dsn  = 'mysql:dbname=bk2004;host=127.0.0.1;port=3306';
$user = 'root';
$pwd = 'root';

$pdo = new PDO($dsn , $user ,$pwd);

$sql = "SELECT `id` FROM `users` WHERE `username` = '{$userName}' AND `password` = '{$userPwd}'";

$stmt = $pdo->query($sql);

// 获取查询结果的数据数量
$num = $stmt->rowcount();

if($num == 1){
    echo json_encode(1);
}else{
    echo json_encode(0);
}