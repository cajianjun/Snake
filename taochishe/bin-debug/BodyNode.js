var BodyNode = (function (_super) {
    __extends(BodyNode, _super);
    // public direction:egret.Point = new egret.Point(0,1);
    function BodyNode() {
        _super.call(this);
        this.color = ColorUtils.getRandomColor();
        this.graphics.beginFill(this.color);
        this.graphics.drawCircle(0, 0, BodyNode.HALF_LONG);
        this.graphics.endFill();
    }
    var d = __define,c=BodyNode,p=c.prototype;
    BodyNode.HALF_LONG = 20;
    return BodyNode;
}(egret.Shape));
egret.registerClass(BodyNode,'BodyNode');
