var PointUtils = (function () {
    function PointUtils() {
    }
    var d = __define,c=PointUtils,p=c.prototype;
    /**
     * 从p2到p1的方向向量
     *
    */
    PointUtils.getDirction = function (p1, p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        var length = Math.sqrt(dx * dx + dy * dy);
        return new egret.Point(dx / length, dy / length);
    };
    return PointUtils;
}());
egret.registerClass(PointUtils,'PointUtils');
