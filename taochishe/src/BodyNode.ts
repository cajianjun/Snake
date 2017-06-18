class BodyNode extends egret.Shape{
	public color:number;

	public constructor() {
		super();
		this.color = ColorUtils.getRandomColor();
		this.graphics.beginFill(this.color);
        this.graphics.drawCircle(0,0,20);
        this.graphics.endFill();
	}



}