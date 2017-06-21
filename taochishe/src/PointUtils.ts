class PointUtils {
	public constructor() {
	}
	/**
	 * 从p2到p1的方向向量
	 * 
	*/
	public static getDirction(p1:egret.Point,p2:egret.Point):egret.Point{
		var dx:number = p2.x - p1.x;
		var dy:number = p2.y - p1.y;
		var length:number = Math.sqrt(dx*dx + dy*dy);
		return  new egret.Point(dx/length,dy/length);
	}


	public static getOppositePosition(x:number,y:number,direction:egret.Point,distance:number):egret.Point{
		var px:number = x - direction.x * distance;
		var py:number = y - direction.y * distance;
		return  new egret.Point(px,py);
	}

	//从d1方向以disDegree的速度转到d2方向
	public static rotateToDirection(d1:egret.Point,disDegree:number,d2:egret.Point):egret.Point{
		if(d1.y > 0){
			
		}
		var df:number = Math.asin(d1.x/d1.y)*180/Math.PI;
		var dt:number = Math.asin(d2.x/d2.y)*180/Math.PI;
		if(d)
		return ;
	}
}