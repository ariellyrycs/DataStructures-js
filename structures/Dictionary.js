/**
 * Created by arobles on 7/3/14.
 */
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
function add(key, value){
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}
function showAll() {
    console.log(this.datastore);
    for (var key in Object.keys(this.datastore)) {
        console.log(key + "->" + this.datastore[key]);
    }
}
var pbook = new Dictionary();
pbook.add("mike", "123");
pbook.add("david", "345");
pbook.add("cynthia", "456");
console.log('david is a extension :' + pbook.find('david'));
pbook.remove("david");
pbook.showAll();