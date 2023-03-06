<?php
$delbox=$_POST['delbox'];
$name = $_POST['name'];
$del="ok";
$sql = new mysqli("localhost","root", "","id19776205_databs");

foreach ($delbox as $del){
    if($name=="admin"){$qu="delete from video where  vid='$del'";}
    else{
    $qu="delete from video where (name='$name' and vid='$del')";}
    mysqli_query($sql, $qu);
    unlink("upload/".$del);
}
mysqli_close($sql);
echo "file deleted";
?>
