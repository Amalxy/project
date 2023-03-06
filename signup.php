<?php
$name=$_POST["name"];
$pswd=$_POST["pswd"];
$email=$_POST["email"];
$num=0;
if (empty($name)){
		die("Please enter your name");
	}
if (empty($pswd)){
		die("Please enter your passwerd");
	}
if (empty($email)){
		die("enter email");
	}

$sql =new mysqli("localhost","root", "","id19776205_databs");
if ($sql->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}
	$qu="SELECT  * from usr where (name = '$name' and pass='$pswd')";
	$re= mysqli_query($sql, $qu);
	while($row = mysqli_fetch_array($re)){$num++;}
	if($num==0){
	$qu="INSERT INTO usr (name,pass,gmail) values ('$name','$pswd','$email')";
	mysqli_query($sql, $qu);
   mysqli_close($sql);
   include 'login.html';
}else{echo "account allready exist";}

?>