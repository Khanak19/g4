var form;
var app;
var bgImg
var gameState=0
var sM1, yogaImg,ykImg,yg1,yg2,yg1S,yg2S,bg2,bg2,bg4,yg3,yg3S,yg4,yg4S,yg5,yg5S;
var ykA,mountPS,mountainp,heroP,heroPS,triP,triPS,cPS,cP,title,musicImg;
var sM2,sM3,s1,s2,s3,study1,study2,study3,sleep1,sleep2,sleep3,ym1,ym2,ym3;
var database,userCount,user;
var bg5,bg6,bg7,bg8,bg9,med1,med2,med3,medi1,medi2,medi3
function preload(){
  bgImg = loadImage("bg.png")
  sM1 = loadImage("sM1.jpg")
  yogaImg = loadImage("yoga.jpg")
  ykImg = loadImage("Yk.png")
  yg1 = loadImage("butterflyP.png") 
  yg2 = loadImage("cobra.png")
  yg1S = loadSound("butterP.mp3")
  yg2S = loadSound("cobP.mp3")
  bg2 = loadImage("bg2.png")
  bg3 = loadImage("bg3.png")
  bg4 = loadImage("bg4.png")
  bg5 = loadImage("1.png")
  bg6 = loadImage("2.png")
  bg7 = loadImage("3.png")
  bg8 = loadImage("4.png")
  bg9 = loadImage("5.png")
  bg10 = loadImage("6.png")
  yg3 = loadImage("treePose.png")
  yg3S = loadSound("treeP.mp3")
  yg4 = loadImage("lotusPose.png")
  yg4S = loadSound("lotP.mp3")
  yg5 = loadImage("sittingPose.png")
  yg5S = loadSound("sitP.mp3")
  ykA = loadImage("ygA.png")
  mountP = loadImage("mP.png")
  mountPS = loadSound("mountainp.mp3")
  heroP = loadImage("HeroP.png")
  heroPS = loadSound("heroS.mp3")
  triP = loadImage("yga1.png")
  triPS = loadSound("TriP.mp3")
  cP = loadImage("chidlP.png")
  cPS = loadSound("childS.mp3")
  title = loadImage("title.png")
  musicImg = loadImage("music.jpg")
  sM2 = loadImage("sM2.jpg")
  sM3 = loadImage("sM3.png")
  s1 = loadImage("study1.jpeg")
  s2 = loadImage("study2.jpg")
  s3 = loadImage("study3.jpg")
  study1 = loadSound("st1.mp3")
  study2 = loadSound("st2.mp3")
  study3 = loadSound("st3.mp3")
  sleep1 = loadImage("sleep1.jpg")
  sleep2 = loadImage("sleep2.jpg")
  sleep3 = loadImage("sleep3.jpg")
  ym1 = loadSound("yM1.mp3")
  ym2 = loadSound("yM2.mp3")
  ym3 = loadSound("yM3.mp3")
  med1 = loadImage("med1.png")
  med2 = loadImage("med2.jpg")
  med3 = loadImage("med3.jpg")
  medi1 = loadSound("medi1.mp3")
  medi2 = loadSound("medi2.mp3")
  medi3 = loadSound("medi3.mp3")

}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  app = new App();
  //game.getState();
  app.start();
  
}


function draw(){
  if(gameState===1){
    background(bg2);
     app.yoga();
     app.music();
  }
  //YOGA MAIN PAGE
 if(gameState===2){
    
   background(bg3);
 app.yogaKids();
 app.yogaAdults();
 var button = createImg('back.png')
 button.position(20,20)
 button.size(50,50)
 button.mousePressed(()=>{ 
   removeElements();
   gameState=1
 })
 }
 if (gameState===3){
   background(bg4)
   app.yoga1();
 }
 if (gameState===4){
   background(bg4)
   app.yoga2();
 }
 if (gameState===5){
   background(bg5)
   app.music1();
   app.music2();
   app.music3();
 }
 if (gameState===6){
   background(bg6)
   app.sleepM();
 }
 if (gameState===7){
  background(bg7)
  app.studyM();
}
if (gameState==8){
  background(bg8)
}
if (gameState===9){
  background(bg9)
}
}
