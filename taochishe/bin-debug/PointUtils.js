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
    PointUtils.getOppositePosition = function (x, y, direction, distance) {
        var px = x - direction.x * distance;
        var py = y - direction.y * distance;
        return new egret.Point(px, py);
    };
    //从d1方向以disDegree的速度转到d2方向
    PointUtils.rotateToDirection = function (d1, d2, disDegree) {
        var df = PointUtils.getDegreeFromPoint(d1.x, d1.y);
        var dt = PointUtils.getDegreeFromPoint(d2.x, d2.y);
        if (Math.abs(df - dt) > disDegree) {
            var tmpdis = (dt - df + 360) / 360;
            if (tmpdis > 180) {
                df -= disDegree;
            }
            else {
                df += disDegree;
            }
            return PointUtils.getPointFromDegree(df);
        }
        else {
            return d2;
        }
    };
    //根据角度获取单位向量
    PointUtils.getPointFromDegree = function (degree) {
        var x = Math.cos(degree * Math.PI / 180);
        var y = Math.sin(degree * Math.PI / 180);
        return new egret.Point(x, y);
    };
    //根据方向单位向量获取角度
    PointUtils.getDegreeFromPoint = function (x, y) {
        var degress = 0;
        if (x == 0 || y == 0) {
            if (x == 0) {
                if (y > 0) {
                    return 90;
                }
                else if (y < 0) {
                    return 270;
                }
            }
            if (y == 0) {
                if (x > 0) {
                    return 0;
                }
                else if (x < 0) {
                    return 180;
                }
            }
        }
        else {
            degress = Math.atan(x / y) * 180 / Math.PI;
            if (y > 0) {
                degress = 90 - degress;
            }
            if (y < 0) {
                degress = 270 - degress;
            }
        }
        return degress;
    };
    return PointUtils;
}());
egret.registerClass(PointUtils,'PointUtils');
