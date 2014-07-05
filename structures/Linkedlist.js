/**
 * Created by arobles on 7/3/14.
 */
var LList = (function () {
    "use strict";
    var Node = function (element) {
        this.element = element || null;
        this.next = null;
    }
    return function () {
        this.head = new Node();
        this.find =  function (item) {
            var currNode = this.head;
            while(true){
                if(currNode.element){
                    if(currNode.element === item){
                        return currNode;
                    }
                } else {
                    break;
                }
                currNode = currNode.next;
            }
            return false;
        },
        this.lastElement = function () {
            var currNode = this.head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }
            return currNode;
        }
        this.add = function (item) {
            var newNode,
                current;
            if(this.head.element == null) {
                this.head.element = item;
            } else {
                newNode = new Node(item);
                current = this.lastElement();
                newNode.next = current.next;
                current.next = newNode;
            }
        },
        this.insert = function (newElement, item) {
            var newNode = new Node(item),
                current = this.find(newElement);
            newNode.next = current.next;
            current.next = newNode;
        },
        this.display = function () {
            var currNode = this.head,
                array = [],
                i = 0;
            array[0] = [];
            array[1] = [];
            while (true) {
                array[0][i] = currNode.element;
                currNode = currNode.next;
                if(currNode == null){
                    array[1][i] = null;
                    break;
                }
                array[1][i++] = currNode.element;

            }
            return array;
        },
        this.findPrevious = function (item) {
            var currNode = this.head;
            while(true){
                if(currNode.element) {
                    if(currNode.next.element === item){
                        return currNode;
                    }
                } else {
                    break;
                }
                currNode = currNode.next;
            }
            return false;
        },
        this.initialized = function () {
            return this.head.element != null;
        },
        this.remove = function (item) {
            var prev = this.findPrevious(item);
            if( prev.next != null)
            {
                prev.next = prev.next.next;
            }
        },
        this.exist = function (value) {
            var currNode = this.head;
            while (true) {
                if(currNode.element === value) {
                    return true;
                } else if(currNode.next) {
                    currNode = currNode.next;
                } else {
                    break;
                }
            }
            return false;
        }
    }
}());





