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
        },
        spriteFrame_normal: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame_press: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // use this for initialization
    onLoad: function () {
      var mainHeroButton = this.node.getChildByName("main_hero");
      var friendsButton = this.node.getChildByName("friends");
      var fightButton = this.node.getChildByName("fight");
      var storeButton = this.node.getChildByName("store");
      
      var menuList = this.menuList.getComponent('menulist');

        var realUrl = cc.url.raw("texture/menu_button_press.png");
        var texture = cc.textureCache.addImage(realUrl);

        var self = this;
      mainHeroButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          console.log('hero button click');
          mainHeroButton.getComponent(cc.Sprite).spriteFrame = self.spriteFrame_press;
          friendsButton.getComponent(cc.Sprite).spriteFrame = self.spriteFrame_normal;
          //发射列表弹入事件
          menuList.node.emit('move-up');
          menuList.showSkills();
      }, this);
      
      friendsButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          mainHeroButton.getComponent(cc.Sprite).spriteFrame = self.spriteFrame_normal;
          friendsButton.getComponent(cc.Sprite).spriteFrame = self.spriteFrame_press;
          menuList.node.emit('move-up');
          menuList.showFriends();
      }, this);

      storeButton.on(cc.Node.EventType.TOUCH_END, function (event) {
          //storeButton.getComponent(cc.Sprite).initWithFile('assets/texture/menu_button_press.png');
          //menuList.node.emit('move-up');
          //menuList.showStore();

          self.tips.y = 100;
          self.tips.active = true;
          self.tips.stopAllActions();
          var action = cc.sequence(cc.delayTime(1),cc.moveTo(0.2,cc.p(0,150)),cc.callFunc(function () {
              self.tips.active = false;
          }));
          self.tips.runAction(action)

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
