cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        coin: {
            default: null,
            type: cc.Prefab,
        },

        coinArray:{
            default:[],
            type:cc.Node
        },

        coinIcon: {
            default: null,
            type: cc.Node,
        },

        coinString:{
            default: null,
            type: cc.Label
        },

        money:0,

    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    makeCoins: function (num) {

        var scene = this.node.parent;


        var self = this;

        for(var i = 0;i < num;i++){
            var c = cc.instantiate(this.coin);

            c.parent = scene;
            self.coinArray.push(c);

            c.setPosition(0,200);

            var delay3 = Math.random()*3/10;

            var delay5 = Math.random()*5/10;

            //var action1 = cc.moveBy(0.2,cc.p(cc.randomMinus1To1()*100,Math.random()*50 + 60));
            var action2 = cc.sequence(
                cc.moveTo(0.3,cc.p(cc.randomMinus1To1()*280,0)),
                cc.moveBy(0.15,10,50),
                cc.moveBy(0.15,10,-50),
                cc.moveBy(0.05,10,10),
                cc.moveBy(0.05,10,-10));

            var actionUp = cc.moveTo(0.6,self.coinIcon.position);
            c.runAction(cc.sequence(action2,cc.delayTime(delay5),actionUp,cc.callFunc(function () {
                self.coinArray.splice(i,1);
                c.destroy();
                self.updateCoinString();
            })));


        }
    },

    updateCoinString:function(){
        console.log(1);
        console.log(this.coinArray.length);

        this.money += 1;

        this.coinString.string = this.money;

    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
