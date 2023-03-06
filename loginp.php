<html>
<?php
$name=$_POST["name"];
$pswd=$_POST["pswd"];
$num=0;
$rre="25";
$qu="no";
if (empty($name)){
		die("Please enter your name");
	}
     $sql = new mysqli("localhost","root", "","id19776205_databs");
         if ($sql->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);}
		
	
	if($name=="admin"&& $pswd=="admin"){ $qu="SELECT vid FROM video ";} 
	else{
	$qu="SELECT  * from usr where (name = '$name' and pass='$pswd')";
	$re= mysqli_query($sql, $qu);
	while($row = mysqli_fetch_array($re)){$num++;}
	
	if($num>0){
	$qu="SELECT vid FROM video where (name='$name') ";}
	else{ include 'signup.html';die("no user name password fond please create one");}}
	
    echo "<center> <h3> welcome  $name </h3> </center>";
    echo "<body>";
    $re= mysqli_query($sql, $qu);
    
   ?>
   <dev id="up"><h4><u>upload vedio</u></h4></br>
<form action="upload.php" method="post" enctype="multipart/form-data">
<input type="file" name="file" >
<input type="hidden" name="name"  value=<?php echo $name ?>>
<input type="hidden" name="pswd"  value=<?php echo $pswd ?>>
<input type="submit" value="upload" name="submit">
</form>
</dev>
<dev id="list">
    
   <?php
  
   echo "<form  action='del.php' method='POST' id='list'>";
   echo "<h4><u>vedio list</u></h4>";
   while($row = mysqli_fetch_array($re))

  {

  echo "<input type='checkbox'name='delbox[]'" ."value =".$row['vid']." />".$row['vid']."</label></br>";




  }
echo "<input type='hidden' name='name'  value=".$name." >";
echo "<input type='submit'  value = 'delete'> </form>";


 
   mysqli_close($sql);

?>
</dev>
</body>
<style>
    #list{
      position: absolute;
    top: 17%;
    left: 48%;
    width: 52%;
    }
    #up{
       top: 18%;
    width: 50%;
    position: absolute;
    right: 43%;
    }
</style>
</html>