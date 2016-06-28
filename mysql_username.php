<?php

	header("content-type:text/html;charset:utf-8");
	$username=$_GET['username'];
	$con=mysql_connect("localhost","root","90130");
	mysql_select_db("sina_tennis_user",$con);
	$sql="select username from user where username='$username'";
	$res=mysql_query($sql,$con);
	$p=false;
	while($row=mysql_fetch_row($res)){
			$p=true;
		}
	if($p){
		echo "0";
	}else{
		echo "1";
	}
	

?>