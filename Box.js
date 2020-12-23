class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
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
};
