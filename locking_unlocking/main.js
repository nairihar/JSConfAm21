const { Worker } = require('worker_threads');

const worker_1 = new Worker('./worker_1.js');
const worker_2 = new Worker('./worker_2.js');

const sharedArray = new Int32Array(new SharedArrayBuffer(16));

Atomics.store(sharedArray, 0, 102);

worker_1.postMessage(sharedArray);
worker_2.postMessage(sharedArray);


setTimeout(() => {
    console.log('Main thread process started');
    Atomics.store(sharedArray, 0, 102);
    Atomics.notify(sharedArray, 0, 1);
    console.log('Main thread process finished', sharedArray);
}, 1000);


