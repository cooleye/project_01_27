/**
 * Created by kongdejian on 16/1/31.
 */

var utils= {
    arrayRemove: function (arr,e) {
        var index = this.indexOf(e);
        if (index > -1) {
            arr.splice(index, 1);
            console.log("-->" + aa.length)
        }
    },

    indexOf: function () {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    },

    test: function () {
        console.log('test');
    }

}


module.exports = utils;