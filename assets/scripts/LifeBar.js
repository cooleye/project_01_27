cc.Class({
    extends: cc.Component,

    properties: {

        progressValue:100,

        life_value:{
            default:null,
            type:cc.Label
        },
        monster_name:{
            default:null,
            type:cc.Label,
            displayName:'怪兽名称'
        },
    },

    // use this for initialization
    onLoad: function () {
        this.progressBar = this.node.getComponent(cc.ProgressBar);
    },

    subProgress: function (value) {

        var rate = value/this.progressValue;

        this.progressBar.progress -= rate;

        this.progressBar.progress = this.progressBar.progress < 0 ? 0 : this.progressBar.progress;

        var str = parseInt(this.life_value.string) -value;
        str = str < 0 ? 0 : str;
        this.life_value.string =  str;

    },

    subProgressValue: function (value,name) {
        this.progressValue = value;
        this.life_value.string = value;
        this.monster_name.string = name;
    },


    makeProgressFull: function () {
        this.progressBar.progress = 1;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
