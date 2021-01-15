var fixedRect,movingRect, fixedRect1;



function setup(){
  createCanvas(800,800);

  fixedRect=createSprite(400,400,100,50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  fixedRect1=createSprite(200,100,50,50);
  fixedRect1.shapeColor="green";

  movingRect=createSprite(200,100,50,100);
  movingRect.shapeColor="green";
  movingRect.debug=true;

 console.log(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2);
 // console.log(fixedRect.x-movingRect.x)

 

}

function draw(){
  background("black");

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if (isTouching(movingRect,fixedRect)){
   
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue";
    }
    else if (isTouching(movingRect,fixedRect1)){
      movingRect.shapeColor="blue";
      fixedRect1.shapeColor="blue";
    }
    else{
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
      fixedRect1.shapeColor="green";
    }
  
  

  drawSprites();
}

