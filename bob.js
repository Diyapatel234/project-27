class Bob {
    constructor(x, y, radius) {
      var options = {
        isStatic:false,
        'restitution':0.76,
       'friction':0,
        'density':0.9,
        stiffness:0
       
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.body);
      }
      
    display(){
      ellipseMode(RADIUS);
     
  
      fill("pink");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };