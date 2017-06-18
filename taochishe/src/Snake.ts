class Snake extends egret.Sprite {
    private speed:number = 10;
    private direction:egret.Point = new egret.Point(0,1);
    private bodyNodes:Array<BodyNode> = [];
    public constructor() {
        super();
        var node:BodyNode = new BodyNode();
        this.addChild(node);
        this.bodyNodes.push(node);
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }

    private onEnterFrame(e:Event):void{
        this.updatePosition();
    }
    private updatePosition():void{
        var gotoX = this.x + this.direction.x * this.speed;
        var gotoY = this.y + this.direction.y * this.speed;
        this.x = gotoX;
        this.y = gotoY;
        if(gotoX < 0 || gotoX > Main.STAGE_W){
            this.direction.x *= -1;
        }
        if(gotoY < 0 || gotoY > Main.STAGE_H){
            this.direction.y *= -1;
        }
        
    }

    public updateDirection(e:egret.TouchEvent){
        var x = e.stageX;
        var y = e.stageY;
        var nowX = this.x;
        var nowY = this.y;
        this.direction  = PointUtils.getDirction(new egret.Point(nowX,nowY),new egret.Point(x,y));
    }


}