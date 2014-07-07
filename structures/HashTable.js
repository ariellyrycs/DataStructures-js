function HashTable() {
    this.table = new Array(137);
    this.simpleHash = function (data) {
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        console.log("Hash value: " + data + " -> " + total);
        return total % this.table.length;
    };
    this.betterHash = function betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length-1;
        }
        return parseInt(total);
    };
    this.showDistro = function () {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    this.put = function (data) {
        var pos = this.betterHash(data);
        this.table[pos] = data;
    };
    //this.get = get;
}
var hTable = new HashTable();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

