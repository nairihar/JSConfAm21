const { Worker } = require('worker_threads');

const buf = new SharedArrayBuffer(4);
const sharedArray = new Int32Array(buf);

console.log('Main thread:', sharedArray);

const worker1 = new Worker('./worker_1.js', {
  workerData: {
    sharedArray,
  }
});

const worker2 = new Worker('./worker_2.js', {
  workerData: {
    sharedArray,
  }
});

setInterval(() => {}, 1000);
