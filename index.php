<!DOCTYPE html>
<html>
<head>
    
    <meta charset="utf-8">
    <video  id="videoElement" hidden="hidden" ></video>
    
<title>Handflix</title>

<?php
$sql = new mysqli("localhost","root", "","id19776205_databs");
 $qu="SELECT vid FROM video ";
 $re= mysqli_query($sql, $qu);
 
?>
<script src="https://unpkg.com/@tensorflow/tfjs-core@2.1.0/dist/tf-core.js"></script>
<script src="https://unpkg.com/@tensorflow/tfjs-converter@2.1.0/dist/tf-converter.js"></script>


<script src="https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.1.0/dist/tf-backend-webgl.js"></script>


<script src="https://unpkg.com/@tensorflow-models/handpose@0.0.6/dist/handpose.js"></script>
 

</head>
 
<body>
    <img id="img1" src="handop2.png" hidden="hidden">
    <img id="img2" src="handcl.png" hidden="hidden">
    <img id="img3" src="forw.png" hidden="hidden">
    <img id="img4" src="back.png" hidden="hidden">
    <img id="img5" src="sound.png" hidden="hidden">
    <img id="img6" src="add.png" hidden="hidden">
    <img id="img7" src="minus.png" hidden="hidden">
    <img id="img8" src="handcl.png" hidden="hidden">
     <img id="img9" src="afile.webp" hidden="hidden">
    <video controls id="vid1">  
        <source type="video/mp4">  
        
      </video>
    <canvas id="canvs"  ></canvas>
    <style> canvas{
        width:100%;
        height:100%;
    }
    body{
        var vid={};

        width: 100%;
        height: 100%;
       
    } 
    video{
        width: 90%;
        height: 80%;
      z-index: -1;
        top: 10%;
        left: 5%;
        position: absolute;
    }
    html{

    width: 100%;
    height: 100%;
    
    }
    
    
    </style>
    
    <script>
    var vidsc=[];
    </script>
    
        <?php
        $num2=0;
        	while($row = mysqli_fetch_array($re)){
	            $vid="upload/".$row['vid'];
               echo"<script> vidsc[".$num2."]='$vid'</script>";
               $num2++;
        	}
        ?>
    
    <script src="s.js">
        
    </script>
    
</body>
</html>