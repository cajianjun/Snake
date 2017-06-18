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
}