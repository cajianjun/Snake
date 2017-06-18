class Food extends egret.Sprite {

    

    public constructor() {
        super();
        this.createView();
    }


    private createView():void {
        var node:BodyNode = new BodyNode();
        this.addChild(node);
        node.x = Math.random()*Main.STAGE_W;
        node.y = Math.random()*Main.STAGE_H;
        
    }

}