var Set = (function () {
    function contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    return function (){
        this.dataStore = [];
        this.add = function (data) {
            if (this.dataStore.indexOf(data) < 0) {
                this.dataStore.push(data);
                return true;
            }
            else {
                return false;
            }
        };
        this.remove = function (data) {
            var pos = this.dataStore.indexOf(data);
            if (pos > -1) {
                this.dataStore.splice(pos,1);
                return true;
            }
            else {
                return false;
            }
        };
        this.size = function () {
            return this.dataStore.length;
        };
        this.union = function (set) {
            var tempSet = new Set();
            for (var i = 0; i < this.dataStore.length; ++i) {
                tempSet.add(this.dataStore[i]);
            }
            for (var i = 0; i < set.dataStore.length; ++i) {
                if (!tempSet.contains(set.dataStore[i])) {
                    tempSet.dataStore.push(set.dataStore[i]);
                }
            }
            return tempSet;
        };
        this.intersect = function (set) {
            var tempSet = new Set();
            for (var i = 0; i < this.dataStore.length; ++i) {
                if (set.contains(this.dataStore[i])) {
                    tempSet.add(this.dataStore[i]);
                }
            }
            return tempSet;
        };
        this.subset = function (set) {
            if (this.size() > set.size()) {
                return false;
            } else {
                for (var member in this.dataStore) {
                    if (!set.contains(member)) {
                        return false;
                    }
                }
            }
            return true;
        };
        this.difference = function (set) {
            var tempSet = new Set();
            for (var i = 0; i < this.dataStore.length; ++i) {
                if (!set.contains(this.dataStore[i])) {
                    tempSet.add(this.dataStore[i]);
                }
            }
            return tempSet;
        };
        this.show = function () {
            return this.dataStore;
        };
        
    }
    
}());



//Running



var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
    console.log("Mike added")
} else {
    console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());
var inter = cis.intersect(dmp);
console.log(it.show());
if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}