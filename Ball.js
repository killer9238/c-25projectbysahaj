class Ball{
    constructor(x,y,radius){
        var option={
            isStatic:true,
            restituition:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius=radius
        this.image=loadImage("paper.png")
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
       //rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
    }
}