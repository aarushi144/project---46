function Asteroids( width, height ){
           if(frameCount% 60 === 0){
            asteroid = createSprite(random(200,550),random(100,500), width, height);
            asteroid.velocityY = 7
           asteroid.addImage("asteroidimg" , asteroidimg)
           asteroidGroup.add(asteroid)
           }
      
     
    }

    function astronauts (){
    astronaut = createSprite(50 ,50 , 50 ,50)
  
   

    }
    