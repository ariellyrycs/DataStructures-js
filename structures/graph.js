function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = function (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    };
    this.showGraph = function () {
        var visited = [];
        for (var i = 0; i < this.vertices; ++i) {
            console.log(this.vertexList[i] + " -> ");
            visited.push(this.vertexList[i]);
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    if (visited.indexOf(this.vertexList[j]) < 0) {
                        console.log(this.vertexList[j] + ' ');
                    }
                }
            }
            console.log(' ');
            visited.pop();
        }
    };
    this.dfs = function dfs(v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    };
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.bfs = function (s) {
        var queue = [];
        this.marked[s] = true;
        queue.unshift(s);
        while (queue.length > 0) {
            var v = queue.shift();
            if (typeof(v) != "string") {
                console.log("Visited vertex: " + v);
            }
            for (var w in this.adj[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.unshift(w);
                }
            }
        }
    };
    this.edgeTo = [];
    this.hasPathTo = function (v) {
        return this.marked[v];
    };
    this.pathTo = function pathTo(v) {
        var source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        }
        var path = [];
        for (var i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(v);
        return path;
    };
    this.topSortHelper = function (v, visited, stack) {
        visited[v] = true;
        for (var w in this.adj[v]) {
            if (!visited[w]) {
                this.topSortHelper(visited[w], visited, stack);
            }
        }
        stack.push(v);
    };
    this.topSort = function () {
        var stack = [];
        var visited = [];
        for (var i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (var i = 0; i < this.vertices; i++) {
            if (visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for (var i = 0; i < stack.length; i++) {
            if (stack[i] != undefined && stack[i] != false) {
                console.log(this.vertexList[stack[i]]);
            }
        }
    };
}



/*running*/
/*var g = new Graph(5);
/*g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();*/

/*results*//*
0->1 2
1->0 3
2->0 4
3->1
4->2
*/
/*depth first search*/
/*g.dfs(0);
console.log('----');*/
/*breadth-first search*/
//g.bfs(0);
/*shorter path*/
/*var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
    if (paths.length > 1) {
    console.log(paths.pop() + '-');
    } else {
    console.log(paths.pop());
    }
}*/
/**/
var g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
"Assembly Language", "Operating Systems",
"Algorithms"];
g.showGraph();
g.topSort();