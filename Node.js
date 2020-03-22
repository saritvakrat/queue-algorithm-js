module.exports = class Node {
    constructor(value) {
        this.value = value; // store the nodes
        this.next = null; // link to the next node in Queue.  First value is null
    }
}