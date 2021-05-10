var  bgImg;
var cat;
var catimg1,catimg2,catimg3;
var mouse;
var mouseimg1,mouseimg2,mouseimg3;



function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catimg1=loadAnimation("images/cat1.png");
mouseimg1=loadAnimation("images/mouse1.png");
catimg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
catimg3=loadAnimation("images/cat4.png");
mouseimg3=loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(850,600,50,50);
cat.addAnimation("catimg1",catimg1);
cat.scale=0.2;


mouse=createSprite(200,600,300,300);
mouse.addAnimation("mouseimg1",mouseimg1);
mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    mouse.addAnimation("mouseend",mouseimg3);
    mouse.changeAnimation("mouseend");
    
    cat.velocityX=0;
    cat.addAnimation("catstop",catimg3);
    cat.changeAnimation("catstop");
    cat.x=300;

}




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;

cat.velocityX=-3;
cat.addAnimation("Teasing",catimg2);
cat.changeAnimation("Teasing");





}







}
