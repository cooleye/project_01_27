//var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {

        coin: {
            default: null,
            type: cc.Prefab,
        },

        coinArray:{
            default:[],
            type:cc.Node,
            visible:false
        },

        coinIcon: {
            default: null,
            type: cc.Node,
        },

        coinString:{
            default: null,
            type: cc.Label
        },

        money:{
            default:0,
            type:Number,
            visible:false
        },
        coinDrop:{
            default:null,
            url:cc.AudioClip
        },
        coinGain:{
            default:null,
            url:cc.AudioClip
        },



    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    makeCoins: function (num) {

        cc.audioEngine.playEffect(this.coinDrop);

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
                self.arrayRemove(self.coinArray,c);
                self.updateCoinString();
            })));

        }
    },

    updateCoinString:function(){

        this.money += 1;

        this.coinString.string = this.money;

        cc.audioEngine.playEffect(this.coinGain);//收集金币音效
    },

    arrayRemove: function (arr,e) {
        var i = indexOf(e);
        arr.splice(i,1);

        function indexOf(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
            }
            return -1;
        }
    }

   // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
