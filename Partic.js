class Partic{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,r,{restitution:0.3, friction: 0.5, density:1.2});
        this.colour = color(random(0,255),random(0,255),random(0,25))
        World.add(world,this.body);
        this.r = r;
        //this.image = loadImage("polygon.png");
    }
    display(){
        fill(this.colour);
        //imageMode(CENTER);
        //image(this.image,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}