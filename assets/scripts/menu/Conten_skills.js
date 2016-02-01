var Hero = require('Hero');

cc.Class({
    extends: cc.Component,

    properties: {

        hero:{
            default:null,
            type:Hero
        },
        //升级所需金币
        upgrade_cost:10,

        levelString:{
            default:null,
            type:cc.Label
        },

        coinString:{
            default: null,
            type: cc.Label
        },

        shengji:{
            default:null,
            type:cc.Animation
        },
        shengjiAudio:{
            default:null,
            url:cc.AudioClip
        },

        spriteFrame_disable: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // use this for initialization
    onLoad: function () {

        this.hero_level = this.hero.getLevel();

        this.levelLabel = cc.find('level/Label',this.node).getComponent(cc.Label);

        this.avatarShengji = cc.find('icon_avatar/shengji',this.node).getComponent(cc.Animation);

        this.upgrageButtonSprite = this.node.getChildByName('upgrade_button').getComponent(cc.Sprite);

        this.initItem(this.hero_level);

        //this.upgradeButton = this.node.getChildByName('upgrade_button');
        //this.upgradeButton.on(cc.Node.EventType.TOUCH_END, this.upgradeClick,this)
    },

    initItem: function (level) {
        this.levelString.string = level;
    },


    /*
    * 升级
    * */
    upgradeClick:function(){

        this.hero_money = this.hero.getMoney();
        this.hero_level = this.hero.getLevel();


        if(this.hero_money >= this.upgrade_cost){
            this.hero_level +=1;
            this.hero_money -= this.upgrade_cost;

            this.hero.setMoney(this.hero_money);
            this.hero.setLevel(this.hero_level);

            this.levelLabel.string = this.hero_level;

            this.coinString.string = this.hero_money;

            this.shengji.play('shengji');
            this.avatarShengji.play('shengji');

            cc.audioEngine.playEffect(this.shengjiAudio);
        }else{
            this.upgrageButtonSprite.spriteFrame = this.spriteFrame_disable;
        }
    }
});
