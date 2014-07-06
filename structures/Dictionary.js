/**
 * Created by arobles on 7/3/14.
 */

var Dictionary = function () {
    this.datastore = new Array();
    this.add = function (key, value){
        this.datastore[key] = value;
    }
    this.find = function (key) {
        return !!this.datastore[key];
    }
    this.remove = function (key) {
        delete this.datastore[key];
    }
    this.showAll = function () {
        var array = new Array([],[]),
            i = 0;
        for (var key in this.datastore) {
            array[0][i] = key;
            array[1][i++] = this.datastore[key];
        }
        return array;
    }
}