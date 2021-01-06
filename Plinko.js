class Plinko{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{restitution:0.3, friction: 0.5, density:1.2});
        //this.colour = color(random(0,255),random(0,255),random(0,25))
        World.add(world,this.body);
        this.radius = radius;
        //this.image = loadImage("polygon.png");
    }
    display(){
        fill("white"),
        //imageMode(CENTER);
        //image(this.image,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}