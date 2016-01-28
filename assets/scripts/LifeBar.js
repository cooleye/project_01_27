cc.Class({
    extends: cc.Component,

    properties: {

        progress:Number,
    },

    // use this for initialization
    onLoad: function () {
        this.progressBar = this.node.getComponent(cc.ProgressBar);

    },

    subProgress: function (value) {

        if(this.progressBar.progress > 0.1){
            this.progressBar.progress -= value;
        } else{
            this.makeProgressFull();
        }
    },

    makeProgressFull: function () {
        this.progressBar.progress = 1;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
