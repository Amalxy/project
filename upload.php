<?php
$name = $_POST['name'];
$pswd = $_POST['pswd'];
$num=0;
if ($_FILES["file"]["size"] < 10) {
  die( "Sorry, your file is  empty or not a vedio"); }
  
$sql = new mysqli("localhost","root", "","id19776205_databs");
$vidn=$_FILES["file"]['name'];
$qvidn="%".$vidn;
$qu="select * from video where vid like '$qvidn' ";
$re=mysqli_query($sql, $qu);
while($row = mysqli_fetch_array($re)){$num++;}
$filen=$vidn;
if($num>0){$filen=$num.$vidn;}
$qu="INSERT INTO video (name,vid) values ('$name','$filen')";
mysqli_query($sql, $qu);
$tr="upload/";
$filen=$tr.$filen;

move_uploaded_file($_FILES["file"]["tmp_name"],$filen );
echo "vedio uploded";
?>