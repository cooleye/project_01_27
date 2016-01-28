cc.Class({
    extends: cc.Component,

    properties: {
        reverse:1,
    },

    // use this for initialization
    onLoad: function () {
        this.audio = this.node.getComponent(cc.AudioSource);
    },

    heroAction : function () {
        //播放主角动画
        this.reverse *= -1;
        var heroAction = cc.scaleTo(0.1,this.reverse,1);
        this.node.stopAllActions();
        this.node.runAction(heroAction);

        this.audio.play();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
