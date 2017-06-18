class ColorUtils {
	public constructor() {
	}
	private static colorArr:Array<number> = [0x000000,0x0000FF,0x00FF00,0xFF0000,0xFFFF00,0xFF00FF,0x00FFFF];
	public static COLOR_1:number = ColorUtils.colorArr[0];
	public static COLOR_2:number = ColorUtils.colorArr[1];
	public static COLOR_3:number = ColorUtils.colorArr[2];
	public static COLOR_4:number = ColorUtils.colorArr[3];
	public static COLOR_5:number = ColorUtils.colorArr[4];
	public static COLOR_6:number = ColorUtils.colorArr[5];
	public static COLOR_7:number = ColorUtils.colorArr[6];

	public static getRandomColor():number{
		var n:number = Math.random()*7;
		var index = Math.floor(n);
		return ColorUtils.colorArr[index];
	}
}