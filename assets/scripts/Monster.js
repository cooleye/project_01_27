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
        monsters:{
            default: [],
            type: [cc.SpriteFrame],
            displayName: '怪兽贴图'
        },

        lifeBar : {
            default:null,
            type:cc.Node,
            displayName:'怪兽血条',
            readonly:true,
        },

        blood:100,

        bombEffect:{
            default:null,
            type:cc.Animation
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

        if(this.blood > 0){
            this.blood -= value;
            this.bloodBar.subProgress(value);
        }else{
            this.makeNewMonster();
        }
    },

    //产生新的怪
    makeNewMonster: function () {

        this.bombEffect.node.opacity = 255;
        this.bombEffect.play('monster_bomb');

        this.audio.play();

        //随机一张怪兽贴图
        var texIndex = Math.floor(Math.random()*8);
        var tex = this.monsters[texIndex];
        var name = 'new monster'+ texIndex;
        this.node.getComponent(cc.Sprite).spriteFrame = tex;

        this.blood = Math.floor(Math.random()*100) + 100;
        this.bloodBar.subProgressValue(this.blood,name);

        this.bloodBar.makeProgressFull();
    }


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
