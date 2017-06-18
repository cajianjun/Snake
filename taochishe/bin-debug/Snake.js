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
