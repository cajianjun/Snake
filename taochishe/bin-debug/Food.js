var Food = (function (_super) {
    __extends(Food, _super);
    function Food() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=Food,p=c.prototype;
    p.createView = function () {
        this.node = new BodyNode();
        this.addChild(this.node);
        this.x = Math.random() * Main.STAGE_W;
        this.y = Math.random() * Main.STAGE_H;
    };
    return Food;
}(egret.Sprite));
egret.registerClass(Food,'Food');
