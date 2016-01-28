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
        // uper:Number,
        // downer:Number,
    },

    // use this for initialization
    onLoad: function () {
        this.menuState = 'DOWN';

        //监听列表探入弹出事件
        this.node.on('move-up',this.moveUp,this);
        this.node.on('move-down',this.moveDown,this);
    },

    moveUp:function(){
        this.node.stopAllActions();
        var moveup = cc.moveTo(0.2,cc.p(0,300));
        // moveup.easing(cc.easeIn(0.2));
        this.node.runAction(moveup);
        this.menuState = 'UP';
    },
     moveDown:function(){
        this.node.stopAllActions();
        var movedown = cc.moveTo(0.2,cc.p(0,0));
        this.node.runAction(movedown);
         console.log('menu list move down');
         this.menuState = 'DOWN';
    },
});
