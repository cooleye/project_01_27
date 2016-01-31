var Monster = require("Monster");
var Hero = require("Hero");
var Menu = require("menu");

cc.Class({
    extends: cc.Component,

    properties: {
        menuList:{
            default:null,
            type:cc.Node
        },

        monster:{
            default:null,
            type:Monster,
            visible: true,      // optional, default is true
            displayName: '怪兽', // optional
            readonly: true
        },

        hero:{
            default:null,
            type:Hero,
            visible: true,      // optional, default is true
            displayName: '英雄', // optional
            readonly: true
        },

        menu : {
            default:null,
            type:Menu,
            viaible:true
        }


    },

    // use this for initialization
    onLoad: function () {
      var menulist = this.menuList.getComponent('menulist');

      var self = this;
      
      this.node.on(cc.Node.EventType.TOUCH_END, function (event) {

        //如果列表弹出则收回
        if(menulist.menuState == 'UP'){
            console.log('up');
            //发射列表弹出事件
            menulist.node.emit('move-down');

        }

          //播放monster别打击动画
          self.monster.beHit(10);
          //主角动画
          self.hero.heroAction();

          //复位按钮
          self.menu.setButtonsNaomal();

      }, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
