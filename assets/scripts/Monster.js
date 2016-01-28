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
    },

    // use this for initialization
    onLoad: function () {

    },

    //monster 被打击动画
    beHit : function () {
        this.node.stopAllActions();
        var action = cc.sequence(cc.rotateTo(0.1,-10,-10),cc.rotateTo(0.1,0,0));
        this.node.runAction(action);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
