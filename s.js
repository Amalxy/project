/////////////////////////////////////////////////////////////////////
async function x1() {
  const canvas = await document.getElementById("canvs");
  const context = await canvas.getContext("2d");
  const video = document.getElementById("videoElement");
    const model = await handpose.load();
    /////////////////////////////////////////////////////////////////
    if (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) {
              navigator.mediaDevices.getUserMedia({ video:{width:350,height:250,},
                    audio:false })
                .then(function (stream) {
                  video.srcObject = stream;
                 
                  video.play();
                })
                .catch(function (err) {
                  console.log("Something went wrong!");
                });
            }
           
   // canvas.height=body.height;
   // canvas.width=body.width;
    ///////////////////////////////////////////////////////////////
    async function draw(){
        //context.drawImage(video,0,0,250,350);
        context.clearRect(0, 0, canvas.width, canvas.height);
        const predictions = await model.estimateHands(video,{
          flipHorizontal: false,
         
         });
        console.log(predictions);
        
        //////////////////////////////////////////////////////s/////
        if (predictions.length > 0) {
          if(hold(predictions)==true){
          
          predictions.forEach((prediction) => {
       // drawHand(predictions,context);
       for (let i = 0; i < prediction.landmarks.length; i++) {
        // Get x point
        const x = canvas.width-prediction.landmarks[i][0];
        // Get y point
        const y =prediction.landmarks[i][1];
        // Start drawing
        context.beginPath();
        context.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
        // Set line color
        context.fillStyle = style[i]["color"];
        context.fill();
                 }
             });
            }

        }
        }
            //////////////////////////////////////////////////////
        
        setInterval(draw,20);
        /////////////////////////////////////////////////////////
    
}
x1();

const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };
  
  // Infinity Gauntlet Style
  const style = {
    0: { color: "yellow", size: 10 },1: { color: "gold", size: 6 },2: { color: "green", size: 10 },3: { color: "gold", size: 6 },4: { color: "gold", size: 6 },
    5: { color: "purple", size: 10 },6: { color: "gold", size: 6 },7: { color: "gold", size: 6 },8: { color: "yellow", size: 6 },9: { color: "blue", size: 10 },
    10: { color: "gold", size: 6 },11: { color: "gold", size: 6 },12: { color: "gold", size: 6 },13: { color: "red", size: 10 },14: { color: "gold", size: 6 },
    15: { color: "gold", size: 6 },16: { color: "gold", size: 6 },17: { color: "orange", size: 10 },18: { color: "gold", size: 6 },
    19: { color: "gold", size: 6 },20: { color: "gold", size: 6 },
  };
  
const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if (predictions.length > 0) {
      
      // Loop through each prediction
      predictions.forEach((prediction) => {
        // Grab landmarks
        const landmarks = prediction.landmarks;
  
        // Loop through fingers
        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          //  Loop through pairs of joints
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            // Get pairs of joints
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];
  
            // Draw path
            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "plum";
            ctx.lineWidth = 4;
            ctx.stroke();
          }
        }
  
        // Loop through landmarks and draw em

      });
    }
  };
  
  const hold =(predictions)=>{
    var fingpx=0;
    var fingpy=0;
    var ceny=0;
    predictions.forEach((prediction) => {
   
      for (let i = 5; i <= 13; i=i+4) {
    fingpx +=prediction.landmarks[i+3][0] - prediction.landmarks[i][0];
    fingpy += prediction.landmarks[i][1] - prediction.landmarks[i+3][1];
    ceny+=  prediction.landmarks[i][1] - prediction.landmarks[i+1][1];
  
  }
      
});
  if(fingpy < ceny)

  {return true;}
  else{return false;}


};