var box1, box2;
var box3, box4;


function setup() {
  createCanvas(800,500);
  box1 = createSprite(100, 200, 70, 70);
  box2 = createSprite(200, 200, 70, 70);
  box3 = createSprite(300, 200, 70, 70);
  box4 = createSprite(400, 200, 70, 70);

  box1.shapeColor = "green";
  box2.shapeColor = "green";
  box3.shapeColor = "green";
  box4.shapeColor = "green";

  box1.debug = true;
  box2.debug = true;
  box3.debug = true;
  box4.debug = true;
}

function draw() {
  background("yellow");

  box1.x = mouseX;
  box1.y = mouseY;
if (isTouching(box1, box3)) {
  box1.shapeColor = "red";
  box3.shapeColor = "red";
}
else {
  box1.shapeColor = "green";
  box3.shapeColor = "green";
}

  
  drawSprites();
}

function isTouching (object1,object2) {
  if (object1.x - object2.x <object1.width/2 + object2.width/2 && object1.y - object2.y <object1.height/2 + object2.height/2 &&
    object2.x - object1.x <object1.width/2 + object2.width/2 && object2.y - object1.y <object1.height/2 + object2.height/2 ) {
      return true;
     }

  else {
        return false;
  }
}