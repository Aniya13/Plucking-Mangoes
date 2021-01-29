class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      
      this.radius= radius;
      World.add(world, this.body);
      this.image= loadImage("mango.png");

    }
    display(){
      push ();
      var pos =this.body.position;
      imageMode(CENTER);
      fill("red");
      image(this.image,pos.x, pos.y, this.radius, this.radius);
      pop ();
    }
  };