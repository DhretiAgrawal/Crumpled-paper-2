class Dustbin {
    constructor (x,y) {
        var options = {
            isStatic : false , 
            restitution : 0.3 ,
            friction : 0.5 , 
          

        }
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x, y, options) ;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image, 700, 350,250, 250);
        pop();
        

    }
}