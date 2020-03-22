let Queue = require('./Queue')

const queue = new Queue();
console.log(`Is the Queue empty? ${queue.isQueueEmpty()}`);
console.log(`add 10 to Queue ${queue.enqueue(10)}`); 
console.log(`add 50 to Queue ${queue.enqueue(50)}`); 
console.log(`The Queue's Head is - ${queue.getQueueHead()}`);
console.log(`The Queue's Tail is - ${queue.getQueueTail()}`);
console.log(`add 100 to Queue ${queue.enqueue(100)}`); 
console.log(`add 100 to Queue ${queue.enqueue(100)}`); 
console.log(`Queue current info ${queue.print()}`);  
console.log(`Dequeue ${queue.dequeue()}`);  
console.log(`Queue current info ${queue.print()}`);  
console.log(`Is the Queue empty? ${queue.isQueueEmpty()}`);
console.log(`Queue length ${queue.getQueueLength()}`);
console.log(`The Queue's Head ${queue.getQueueHead()}`);
console.log(`The Queue's Tail is - ${queue.getQueueTail()}`);

