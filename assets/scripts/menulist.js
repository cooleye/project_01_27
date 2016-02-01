cc.Class({
    extends: cc.Component,

    properties: {


    },

    // use this for initialization
    onLoad: function () {
        this.menuState = 'DOWN';

        //监听列表探入弹出事件
        this.node.on('move-up',this.moveUp,this);
        this.node.on('move-down',this.moveDown,this);

        //this.audio = this.node.getComponent(cc.AudioSource);

        this.skillsContent = cc.find('view/content_skills',this.node);
        this.friendsContent = cc.find('view/content_friends',this.node);
        this.friends_pkContent = cc.find('view/content_pk',this.node);
        this.storeContent = cc.find('view/content_store',this.node);

        this.scrollView = this.node.getComponent(cc.ScrollView);
    },

    moveUp:function(){
        this.node.stopAllActions();
        var moveup = cc.moveTo(0.2,cc.p(0,300));
        // moveup.easing(cc.easeIn(0.2));
        this.node.runAction(moveup);
        this.menuState = 'UP';

        //this.audio.play('tab_change');
    },
     moveDown:function(){
        this.node.stopAllActions();
        var movedown = cc.moveTo(0.2,cc.p(0,0));
        this.node.runAction(movedown);

        this.menuState = 'DOWN';
         //this.audio.play('window_close');
    },

    showSkills: function(){
        this.skillsContent.active = true;
        this.friendsContent.active = false;
        this.friends_pkContent.active = false;
        this.storeContent.active = false;
        this.scrollView.content = this.skillsContent;
    },

    showFriends : function () {
        this.skillsContent.active = false;
        this.friendsContent.active = true;
        this.storeContent.active = false;
        this.friends_pkContent.active = false;
        this.scrollView.content = this.friendsContent;
    },
    showFriends_pk : function () {
        this.skillsContent.active = false;
        this.friendsContent.active = false;
        this.friends_pkContent.active = true;
        this.storeContent.active = false;
        this.scrollView.content = this.friends_pkContent;
    },
    showStore : function () {
        this.skillsContent.active = false;
        this.friendsContent.active = false;
        this.friends_pkContent.active = false;
        this.storeContent.active = true;
        this.scrollView.content = this.storeContent;
    }
});
