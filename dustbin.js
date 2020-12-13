  class dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      //this.body = Bodies.rectangle(x,y,width,height,options);
      //this.width = width;
      //this.height = height;
      //World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
      
    }
    display(x,y,w,h){
        
      //var pos =this.body.position;
      //push();
      rectMode(CENTER);
      imageMode(CENTER);
        image(this.image, x, y, w, h);
      fill("green");
      //rect(pos.x, pos.y, this.width, this.height);
      //pop();
     
    }
}