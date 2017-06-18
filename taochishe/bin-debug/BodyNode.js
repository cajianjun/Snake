var BodyNode = (function (_super) {
    __extends(BodyNode, _super);
    function BodyNode() {
        _super.call(this);
        this.color = ColorUtils.getRandomColor();
        this.graphics.beginFill(this.color);
        this.graphics.drawCircle(0, 0, 20);
        this.graphics.endFill();
    }
    var d = __define,c=BodyNode,p=c.prototype;
    return BodyNode;
}(egret.Shape));
egret.registerClass(BodyNode,'BodyNode');
