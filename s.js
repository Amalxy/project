/////////////////////////////////////////////////////////////////////
async function x1() {
  var canvas = await document.getElementById("canvs");
  const context = await canvas.getContext("2d");
  const video = document.getElementById("videoElement");
  const vid1 = document.getElementById("vid1");
  const imghop= document.getElementById("img1");
  const imghcl= document.getElementById("img2");
  const forw= document.getElementById("img3");
  const back= document.getElementById("img4");
  const sound= document.getElementById("img5");
  const add= document.getElementById("img6");
  const minus= document.getElementById("img7");
   const addfile= document.getElementById("img9");
  var inp = document.getElementById("get-files");
  let vp=1;
 

  
  const model = await handpose.load();
   let delay=100;
   var hx=0;
   var hy=0;
   
    context.fill();
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
            
        vid1.src=vidsc[0];         
            
    async function draw(){
  
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(back,canvas.width/15,canvas.height/2,10,15);
        context.drawImage(forw,9*canvas.width/10,canvas.height/2,10,15);
        context.drawImage(sound,(9*canvas.width/10)-canvas.width/10,9*canvas.height/10,10,15);
        context.drawImage(add,(9*canvas.width/10),9*canvas.height/10,10,15);
        context.drawImage(minus,(9*canvas.width/10)-canvas.width/5,9*canvas.height/10,10,15);
        context.drawImage(addfile,(3*canvas.width/10),9*canvas.height/10,10,15);
        const predictions = await model.estimateHands(video,{
          flipHorizontal: false,
         
         });
        //console.log(predictions);
      
        if (predictions.length > 0) {
          
          
          predictions.forEach((prediction)=>{

            
           
      
    
        hx = 15+canvas.width-(prediction.landmarks[0][0]+prediction.landmarks[17][0])/2;
      
        hy =-40+(prediction.landmarks[0][1]+prediction.landmarks[9][1])/2;
        context.drawImage(imghop,hx,hy,15,10);
       
        
        if(hold(prediction)==true){
        context.drawImage(imghcl,hx,hy,15,10);

          if(addc(hx,hy,canvas)==true){console.log("plus sound"); if(vid1.volume<1) vid1.volume=vid1.volume+.2;  delay();}
          if(addfilec(hx,hy,canvas)==true){console.log("addfile"); window.location="login.html" }
          if(minusc(hx,hy,canvas)==true){console.log("minus");  if(vid1.volume>.3){ vid1.volume=vid1.volume-.2; console.log(vid1.volume); delay();}}
          if(forwc(hx,hy,canvas)==true){console.log("forw"); vp=(vp+1) % vidsc.length; vid1.src=vidsc[vp]; vid1.play(); delay();}
          if(backc(hx,hy,canvas)==true){console.log("back");vp=(vp-1) % vidsc.length; vp=Math.sqrt(vp*vp); vid1.src=vidsc[vp]; vid1.play(); delay();}
          if(soundc(hx,hy,canvas)==true){console.log("sound"); if(vid1.muted==false){vid1.muted=true;}
          else{vid1.muted=false;}delay();}
          if(playp(hx,hy,canvas)==true){console.log("play");
               if(vid1.paused ==true){vid1.play(); } else{vid1.pause();}
               delay();
          }}
             });
                   }
                   function delay(){
                    let i=0;
                    for(i=0;i<10000000;i++){
          
                    }
                  }

                     }
                       setInterval(draw,delay);
        
                                                  }
x1();

const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };
  
  

  
  const hold =(prediction)=>{
    let fingpx=0;
   let fingpy=0;
   let ceny=0;
   
   
      for (let i = 5; i <= 13; i=i+4) {
    fingpx +=prediction.landmarks[i+3][0] - prediction.landmarks[i][0];
    fingpy += prediction.landmarks[i][1] - prediction.landmarks[i+3][1];
    ceny+=  prediction.landmarks[i][1] - prediction.landmarks[i+1][1];
  
  }
      

  if(fingpy < ceny)

  {return  true;}
  else{return false;}


};

const playp=(x,y,canvas)=>{
   y=  y - canvas.height/2;
   x=  x - canvas.width/2;
  if(( -10 < x) && (x < 10) && (-10 < y) && (y < 10))
  {return  true;}
  else {return false;}
};

const forwc=(x,y,canvas)=>{
x=x-9*canvas.width/10;
y=y-canvas.height/2;
if(( -10 < x) && (x < 10) && (-10 < y) && (y < 10))
{return  true;}
else {return false;}
};

const backc=(x,y,canvas)=>{
  x=x-canvas.width/15;
  y=y-canvas.height/2;
  if(( -10 < x) && (x < 10) && (-10 < y) && (y < 10))
  {return  true;}
  else {return false;}
  };

  const soundc=(x,y,canvas)=>{
    x=x-(9*canvas.width/10-canvas.width/10);
    y=y-9*canvas.height/10;
    if(( -10 < x) && (x < 10) && (-10 < y) && (y < 10))
    {return  true;}
    else {return false;}
    };

    const addc=(x,y,canvas)=>{
      x=x-(9*canvas.width/10);
      y=y-9*canvas.height/10;
      if(( -10 < x) && (x < 10) && (-10 < y) && (y < 10))
      {return  true;}
      else {return false;}
      };

      const minusc=(x,y,canvas)=>{
        x=x-(7*canvas.width/10);
        y=y-9*canvas.height/10;
        if(( -10< x) && (x < 10) && (-10 < y) && (y < 10))
        {return  true;}
        else {return false;}
        };
    const addfilec=(x,y,canvas)=>{
        x=x-(3*canvas.width/10);
        y=y-9*canvas.height/10;
        if(( -10< x) && (x < 10) && (-10 < y) && (y < 10))
        {return  true;}
        else {return false;}
        };
       