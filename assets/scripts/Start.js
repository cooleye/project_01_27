cc.Class({
    extends: cc.Component,

    properties: {

        //以后可能是微信的openid
        userID:0,

        enter:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
       var enter = this.enter;
       enter.on(cc.Node.EventType.TOUCH_END, function (event) {
          console.log('enter game');
          cc.director.loadScene('main');
        }, this);

        this.websocket();
    },

    websocket: function () {

        var self = this;
        ws = new WebSocket("ws://localhost:8282");
        ws.onopen = function() {
            console.log("--------连接成功-------");

            /*--------------------玩家登录---------------------*/
            var sendObj = {
                'type' :'login',
                'id' : self.userID
            };
            var json = JSON.stringify(sendObj);
            ws.send(json);

            console.log('send login message');

        };
        ws.onmessage = function(e) {

            var json =  JSON.parse(e.data);
            var func = json.type;

            console.log("---type:" + func);

            eval('self.' + func).call(self,json);
            //if (typeof func === 'function') {
            //    return func.apply(self, json);
            //}

        };
        ws.onerror = function (event) {
            console.log("消息发送失败");
        };
        ws.onclose = function (event) {
            console.log("服务器断开连接。。。");
        };

    },
    connect : function (json) {
        console.log("<<<<连接:" + json.state);
    },
    login : function (json) {
        console.log("<<<<登陆 id:" + json.id);
    },
    addGold : function (json) {
        var gold = json.gold;
        console.log("<<<< 玩家金币:" + gold);
    },
    addLevel : function (json) {
        var level = json.level;
        console.log("<<<< 玩家等级:" + level);
    }

});
