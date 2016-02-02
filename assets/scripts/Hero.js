cc.Class({
    extends: cc.Component,

    properties: {

        //主角昵称
        heroNickName:{
            default:'昵称',
            type:String,
            displayName:'昵称'
        },
        //主角ID
        heroID:{
            default:'000000',
            type:String,
            displayName:'ID'
        },
        //头像
        heroAvatar:{
            default:'',
            type:String,
            displayName:'头像'
        },
        //主角等级
        heroLevel:{
            default:10,
            type:Number,
            displayName:'等级'
        },

        //主角金币数量
        heroGold:100,

        //主角钻石数量
        heroDiamond:{
            default:0,
            type:Number,
            displayName:'钻石'
        },

        reverse:{
            default:1,
            type:Number,
            visible:false
        },

    },

    // use this for initialization
    onLoad: function () {
        this.audio = this.node.getComponent(cc.AudioSource);
    },

    setGold: function (value) {
        this.heroGold = value;
    },
    getGold: function () {
      return this.heroGold;
    },
    sendGoldToServer : function () {
        //更新玩家金币数
        var sendObj = {
            'type' :'addGold',
            'id' : self.userID,
            'gold':this.heroGold
        };
        var json = JSON.stringify(sendObj);
        ws.send(json);

        console.log('send gold to sever');
    },

    setLevel: function (value) {
        this.heroLevel = value;

        //更新玩家等级
        var sendObj = {
            'type' :'addLevel',
            'id' : self.userID,
            'level':this.heroLevel
        };
        var json = JSON.stringify(sendObj);
        ws.send(json);
    },

    getLevel: function () {
        return this.heroLevel;
    },

    setDiamon : function (value) {
        this.heroDiamond = value;
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
