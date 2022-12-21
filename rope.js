class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
       //rect(320,400,2,320)
	   //rect(360,400,2,320)
	   //rect(400,400,2,320)
	   //rect(440,400,2,320)
	   //rect(480,400,2,320)
	   line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
	   //mam or else can we write rect only? mam and which is the point a and b
	}

}