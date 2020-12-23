class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.hey = 255
  }
  display(){
    if(this.body.speed>5){
    World.remove(world, this.body);
    push();
    tint(255,this.hey)
    this.hey = this.hey-5
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
    } else {
    super.display()
    }
    }
}