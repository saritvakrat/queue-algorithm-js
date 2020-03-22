let Node = require('./Node')

/**
 * @TimeComplexity
 * Access - O(n)
 * Search - O(n)
 * Insert at the end - O(1)
 * Delete from the beginning - O(1)
 * @description The Queue algorithm main principle is FIFO
 * @FIFO - first in first out
 */
module.exports = class Queue {
    constructor() {
        this.head = null; // link to the first node in queue
        this.tail = null; // link to the last node in queue
        this.length = 0; // num of nodes in queue
    }

    /**
     * 
     * @param {*} value - create a node
     * @description function to add a new Node to the end(tail) of Queue
     */
    enqueue(value) {
        const node = new Node(value);

        // if we already have a first Node 
        if (this.head) {
            // insert created node after the last one
            this.tail.next = node;
            // the created node is the last one
            this.tail = node;
        } else {
            // if queue is empty the new node is the head and tail
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * 
     * @param {*} value 
     * @description remove Nodes from queue
     */
    dequeue(value) {
        // store the link to head we need to remove
        const current = this.head;
        // move the head to the second Node inline
        this.head = this.head.next;
        // decrement the length of queue
        this.length--;

        return current.value;
    }

    /**
     * @description log all values of the queue
     */
    print() {
        // store the link to head we need to remove
        let current = this.head;

        while (current) {
            console.log(`${JSON.stringify(current)}`);
            // move to the next node after the head
            current = current.next;
        }
    }

    /**
     * Check if the Queue is empty
     * @returns true != empty, false == empty
     */
    isQueueEmpty() {
        return this.length === 0;
    }

    /**
    * @returns value of the first Node in the Queue
    */
    getQueueHead() {
        return this.head.value;
    }

    /**
   * @returns value of the first Node in the Queue
   */
    getQueueTail() {
        return this.tail.value;
    }

    /**
    * @returns value of the first Node in the Queue
    */
    getQueueLength() {
        return this.length;
    }
}