class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
  
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.image1, 170, 25);
        image (this.image2, 140, 23);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,23, 8);
            if (pointA.x < 200) {
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+10);
                line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+10);
                image (this.image3, pointA.x-25, pointA.y-10, 15, 30);  
            }
            else{
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+10);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+10);
            image (this.image3, pointA.x+20, pointA.y-10, 15, 30);
            }
            
        }
    }
  
}