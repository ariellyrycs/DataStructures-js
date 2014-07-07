var BST = (function () {
    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = function () {
            return this.data;
        };
    }
    /*function removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
            return node.right;
            }
            // node has no right child
            if (node.right == null) {
            return node.left;
            }
            // node has two children
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
        } else {
        node.right = removeNode(node.right, data);
        return node;
        }
    }*/
    return function () {
        this.root = null;
        this.insert = function (data) {
            var n = new Node(data, null, null);
            if (this.root == null) {
                this.root = n;
            } else {
                var current = this.root;
                var parent;
                while (true) {
                    parent = current;
                    if (data < current.data) {
                        current = current.left;
                        if (current == null) {
                            parent.left = n;
                            break;
                        }
                    } else {
                        current = current.right;
                        if (current == null) {
                            parent.right = n;
                            break;
                        }
                    }
                }
            }
        };
        //case 1
        this.inOrder = function (node) {
            if (!(node == null)) {
                this.inOrder(node.left);
                console.log(node.show() + " ");
                this.inOrder(node.right);
            }
        };
        //case 2
        this.preOrder = function (node) {
            if (!(node == null)) {
                console.log(node.show());
                this.preOrder(node.left);
                this.preOrder(node.right);
            }
        }
        //case 3
        this.postOrder = function (node) {
            if (!(node == null)) {
                this.postOrder(node.left);
                this.postOrder(node.right);
                console.log(node.show() + " ");
            }
        }
        this.getMin = function () {
            var current = this.root;
            while (!(current.left == null)) {
                current = current.left;
            }
            return current.data;
        }
        this.getMax = function () {
            var current = this.root;
            while (!(current.right == null)) {
                current = current.right;
            }
            return current.data;
        }
        //find a specific value
        this.find = function (data) {
            var current = this.root;
            while (current.data != data) {
                if (data < current.data) {
                    current = current.left;
                } else {
                    current = current.right;
                }
                if (current == null) {
                    return null;
                }
            }
            return current;
        }
        /*this.remove = function (data) {
            this.root = removeNode(this.root, data);
        }*/
    }
}());





//Running
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log(nums.getMin() + " " + nums.getMax());
var value = 3;
var found = nums.find(value);
if (found != null) {
    console.log("Found " + value + " in the BST.");
}
