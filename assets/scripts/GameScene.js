var Monster = require("Monster");
var Hero = require("Hero");

cc.Class({
    extends: cc.Component,

    properties: {
        menuList:{
            default:null,
            type:cc.Node
        },
        
        lifeBar:{
            default:null,
            type:cc.Node
        },
        monster:{
            default:null,
            type:Monster
        },

        hero:{
            default:null,
            type:Hero
        },


    },

    // use this for initialization
    onLoad: function () {
      var menulist = this.menuList.getComponent('menulist');

      var LifeBar = this.lifeBar.getComponent('LifeBar');

      var self = this;
      
      this.node.on(cc.Node.EventType.TOUCH_END, function (event) {

        //如果列表弹出则收回
        if(menulist.menuState == 'UP'){
            console.log('up');
            //menulist.moveDown();
            //发射列表弹出事件
            menulist.node.emit('move-down');
        }

          //播放monster别打击动画
          self.monster.beHit();

          self.hero.heroAction();

          //monster掉血
          var value = 0.1;
          LifeBar.subProgress(value);

      }, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
