var CoinFactory = require('CoinFactory');

cc.Class({
    extends: cc.Component,

    properties: {

        //怪兽贴图
        monsters:{
            default: [],
            type: [cc.SpriteFrame],
            displayName: '怪兽贴图'
        },

        //怪兽血条
        lifeBar : {
            default:null,
            type:cc.Node,
            displayName:'怪兽血条',
            //readonly:true,
        },

        //怪兽血量
        blood:{
            default:100,
            type:Number,
            displayName:'怪兽血量',
            readonly:true,
        },

        //爆炸特效
        bombEffect:{
            default:null,
            type:cc.Animation
        },

        //金币工厂
        coinFactory:{
            default:null,
            type:CoinFactory
        }

    },

    // use this for initialization
    onLoad: function () {
        this.audio = this.node.getComponent(cc.AudioSource);
        this.bloodBar = this.lifeBar.getComponent('LifeBar');

        this.animation = this.node.getComponent(cc.Animation);
    },

    //monster 被打击动画
    beHit : function (value) {
        this.node.stopAllActions();
        var action = cc.sequence(cc.rotateTo(0.1,-10,-10),cc.rotateTo(0.1,0,0));
        this.node.runAction(action);
        this.subBlood(value);
    },

    //怪兽掉血
    subBlood : function(value){

        this.blood -= value;

        if(this.blood > 0){
            this.bloodBar.subProgress(value);
        }
        else{
            this.makeNewMonster();
        }
    },

    //产生新的怪
    makeNewMonster: function () {

        this.bombEffect.node.opacity = 255;
        this.bombEffect.play('monster_bomb');

        this.audio.play();

        this.dropCoins();

        //随机一张怪兽贴图
        var texIndex = Math.floor(Math.random()*8);
        var tex = this.monsters[texIndex];
        var name = 'new monster'+ texIndex;
        this.node.getComponent(cc.Sprite).spriteFrame = tex;

        this.blood = Math.floor(Math.random()*100) + 100;
        this.bloodBar.subProgressValue(this.blood,name);

        this.bloodBar.makeProgressFull();
    },

    //金币掉落
    dropCoins: function () {

        this.coinFactory.makeCoins(10);
    }


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
