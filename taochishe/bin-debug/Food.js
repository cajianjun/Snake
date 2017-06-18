var Food = (function (_super) {
    __extends(Food, _super);
    function Food() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=Food,p=c.prototype;
    p.createView = function () {
        var node = new BodyNode();
        this.addChild(node);
        node.x = Math.random() * Main.STAGE_W;
        node.y = Math.random() * Main.STAGE_H;
    };
    return Food;
}(egret.Sprite));
egret.registerClass(Food,'Food');
