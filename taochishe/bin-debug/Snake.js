var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.call(this);
        this.speed = 10;
        this.direction = new egret.Point(0, 1);
        this.bodyNodes = [];
        var node = new BodyNode();
        this.addChild(node);
        this.bodyNodes.push(node);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
    var d = __define,c=Snake,p=c.prototype;
    p.onEnterFrame = function (e) {
        this.updatePosition();
    };
    p.updatePosition = function () {
        var gotoX = this.x + this.direction.x * this.speed;
        var gotoY = this.y + this.direction.y * this.speed;
        this.x = gotoX;
        this.y = gotoY;
        if (gotoX < 0 || gotoX > Main.STAGE_W) {
            this.direction.x *= -1;
        }
        if (gotoY < 0 || gotoY > Main.STAGE_H) {
            this.direction.y *= -1;
        }
        this.updateBody();
    };
    p.updateBody = function () {
        for (var i = 0; i < this.bodyNodes.length; i++) {
            if (i == 0) {
                continue;
            }
            var p1x = this.bodyNodes[i - 1].x;
            var p1y = this.bodyNodes[i - 1].y;
            var p2x = this.bodyNodes[i].x;
            var p2y = this.bodyNodes[i].y;
            var p = PointUtils.getOppositePosition(p1x, p1y, PointUtils.getDirction(new egret.Point(p2x, p2y), new egret.Point(p1x, p1y)), BodyNode.HALF_LONG);
            this.bodyNodes[i].x = p.x;
            this.bodyNodes[i].y = p.y;
        }
    };
    p.eat = function (food) {
        food.parent.removeChild(food);
        food.node.x = food.x;
        food.node.y = food.y;
        this.xiaohua(food.node);
    };
    p.xiaohua = function (node) {
        this.bodyNodes.push(node);
        this.addChild(node);
    };
    p.updateDirection = function (e) {
        var x = e.stageX;
        var y = e.stageY;
        var nowX = this.x;
        var nowY = this.y;
        this.direction = PointUtils.getDirction(new egret.Point(nowX, nowY), new egret.Point(x, y));
    };
    return Snake;
}(egret.Sprite));
egret.registerClass(Snake,'Snake');
