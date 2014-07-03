/**
 * Created by arobles on 7/3/14.
 */
function Node(element)
{
    this.element = element;
    this.next = null;
}

// LList
function LList()
{
    this.head = new Node("head"); //why?? ans:because there should be head to start with
}


LList.prototype.find =  function (item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

//inserting the new node
LList.prototype.insert = function (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

LList.prototype.display = function () {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

LList.prototype.findPrevious = function (item)
{
    var currNode = this.head; //llar to head
    while( !((currNode.next == null) && (currNode.next.element == item)))
    {
        currNode = currNode.next;
    }
    return currNode;
}
LList.prototype.remove = function (item)
{
    var prev = this.findPrevious(item);
    if( prev.next != null)
    {
        prev.next = prev.next.next;
    }
}