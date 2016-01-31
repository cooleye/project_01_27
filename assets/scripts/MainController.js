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

        var audio = this.node.getComponent(cc.AudioSource);
        audio.play();

        this.websocket();
    },

    websocket: function () {

        ws = new WebSocket("ws://127.0.0.1:8282");
        ws.onopen = function() {
            console.log("连接成功");
            ws.send('tom');
            console.log("给服务端发送一个字符串：tom");
        };
        ws.onmessage = function(e) {
            console.log("收到服务端的消息：" + e.data);
        };
        ws.onerror = function (event) {
            console.log("消息发送失败");
        };
        ws.onclose = function (event) {
            console.log("服务器断开连接。。。");
        };

    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
