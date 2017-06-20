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
        this.updateBody();
    }

    public updateBody(){

        
        for(var i = 0;i < this.bodyNodes.length;i ++){
            if(i == 0){
                continue;
            }
            var p1x:number = this.bodyNodes[i-1].x;
            var p1y:number = this.bodyNodes[i-1].y;
            var p2x:number = this.bodyNodes[i].x;
            var p2y:number = this.bodyNodes[i].y;
            var p:egret.Point = PointUtils.getOppositePosition(p1x,p1y,PointUtils.getDirction(new egret.Point(p1x,p1y),new egret.Point(p2x,p2y)),BodyNode.HALF_LONG);
            this.bodyNodes[i].x = p.x;
            this.bodyNodes[i].y = p.y;
        }

    }

    public eat(food:Food){
        food.parent.removeChild(food);
        food.node.x = food.x;
        food.node.y = food.y;
        this.xiaohua(food.node);
    }

    public xiaohua(node:BodyNode){
        this.bodyNodes.push(node);
        this.addChild(node);
    }

    public updateDirection(e:egret.TouchEvent){
        var x = e.stageX;
        var y = e.stageY;
        var nowX = this.x;
        var nowY = this.y;
        this.direction  = PointUtils.getDirction(new egret.Point(nowX,nowY),new egret.Point(x,y));
    }


}