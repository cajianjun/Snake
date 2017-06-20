class BodyNode extends egret.Shape{
	public color:number;
	public static HALF_LONG:number = 20;
	// public direction:egret.Point = new egret.Point(0,1);
	public constructor() {
		super();
		this.color = ColorUtils.getRandomColor();
		this.graphics.beginFill(this.color);
        this.graphics.drawCircle(0,0,BodyNode.HALF_LONG);
        this.graphics.endFill();
	}



}