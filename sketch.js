
var asteroid1 ,asteroid2 , asteroid3 , asteroidGroup ;
var astronaut  
var asteroidimg , asteroidimg2

var gameState = 0 ;
var earth , earthImg
var score = 0 ; 

function preload()
 
// astronautimg = loadImage ("")
asteroidimg = loadImage("asteroid2.png")
// asteroidimg2 = loadImage("")
 earthImg = loadImage("earth.png")

{
	
}

function setup() {
	createCanvas(800, 700);
 
  astronaut  = createSprite(100,130, 50 , 50 );
 asteroidGroup = new Group ();

}


function draw() {

  background("blue");
  
 
  if (gameState === 0 ){
    text ("press space key to start the game " ,400 ,400 )
    }
    
   if (keyDown("space")){
    gameState = 1 ; 
    earth = createSprite (400 , 650 , 500 ,600)
    earth = addImage (earthimg)
  Asteroids(50 ,50);
  astronaut = createSprite(50 ,50 , 50 ,50)
  if(keyDown("up")){
    astronaut.position.x += 0 
    astronaut.position.y += 10 
  
  }
  if(keyDown("down")){
    astronaut.position.x += 0 
    astronaut.position.y -=10 
   
   
  }
  if(keyDown("left")){
    astronaut.position.x -= 10 
    astronaut.position.y  = 0 
  
  }

  if(keyDown("right")){
    astronaut.position.x += 10 
    astronaut.position.y  = 0 
  
  }
  }

    // earth = createSprite (400 , 650 , 200 ,200)
  //  earth.addImage(earthimg)
 
   //text("score :" + score , 100 ,100 )

     if(astronaut.isTouching(asteroidGroup)){
      score = score + 1 
    }

                                                        
      text("mission failed" , 300 , 300);

    }
    if(asteroidGroup.isTouching(earth)){
      gameState = 3 ; 
     
    }

  drawSprites();
 
}

