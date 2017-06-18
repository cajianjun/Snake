var ColorUtils = (function () {
    function ColorUtils() {
    }
    var d = __define,c=ColorUtils,p=c.prototype;
    ColorUtils.getRandomColor = function () {
        var n = Math.random() * 7;
        var index = Math.floor(n);
        return ColorUtils.colorArr[index];
    };
    ColorUtils.colorArr = [0x000000, 0x0000FF, 0x00FF00, 0xFF0000, 0xFFFF00, 0xFF00FF, 0x00FFFF];
    ColorUtils.COLOR_1 = ColorUtils.colorArr[0];
    ColorUtils.COLOR_2 = ColorUtils.colorArr[1];
    ColorUtils.COLOR_3 = ColorUtils.colorArr[2];
    ColorUtils.COLOR_4 = ColorUtils.colorArr[3];
    ColorUtils.COLOR_5 = ColorUtils.colorArr[4];
    ColorUtils.COLOR_6 = ColorUtils.colorArr[5];
    ColorUtils.COLOR_7 = ColorUtils.colorArr[6];
    return ColorUtils;
}());
egret.registerClass(ColorUtils,'ColorUtils');
