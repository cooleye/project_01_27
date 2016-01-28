cc.Class({
    extends: cc.Component,

    properties: {

        menuList:{
            default:null,
            type:cc.Node
        },

        tips:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
      var mainHeroButton = this.node.getChildByName("main_hero");
      var friendsButton = this.node.getChildByName("friends");
      var fightButton = this.node.getChildByName("fight");
      var storeButton = this.node.getChildByName("store");
      
      var menuList = this.menuList.getComponent('menulist');

      
      var self = this;
      mainHeroButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          console.log('hero button click');
          //发射列表弹入事件
          menuList.node.emit('move-up');
      }, this);
      
      friendsButton.on(cc.Node.EventType.TOUCH_END, function (event) {
            menuList.node.emit('move-up');
      }, this);

      storeButton.on(cc.Node.EventType.TOUCH_END, function (event) {
            menuList.node.emit('move-up');
      }, this);

        fightButton.on(cc.Node.EventType.TOUCH_END, function (event) {


            self.tips.y = 100;
            self.tips.active = true;
            self.tips.stopAllActions();
            var action = cc.sequence(cc.delayTime(1),cc.moveTo(0.2,cc.p(0,150)),cc.callFunc(function () {
                self.tips.active = false;
            }));
            self.tips.runAction(action)
        }, this);
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
