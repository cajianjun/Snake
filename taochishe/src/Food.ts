class Food extends egret.Sprite {

    public node :BodyNode;

    public constructor() {
        super();
        this.createView();
    }


    private createView():void {
        this.node = new BodyNode();
        this.addChild(this.node);
        this.x = Math.random()*Main.STAGE_W;
        this.y = Math.random()*Main.STAGE_H;
        
    }

}