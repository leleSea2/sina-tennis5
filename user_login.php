<?php

	$username=$_GET['username'];
	file_put_contents("test.txt","--$username--",FILE_APPEND);
	header("Location:/sina-tennis/mysql_username.php?username=$username");

?>