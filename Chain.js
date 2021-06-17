class Chain{
    constructor(localbodyA,localbodyB){
        var options={
          stiffness:0.8,
          bodyA:localbodyA,
          bodyB:localbodyB
        }

        this.chain=Constraint.create(options);
        World.add(myWorld,this.chain);
        console.log(this.chain)
        
    }
    show(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}