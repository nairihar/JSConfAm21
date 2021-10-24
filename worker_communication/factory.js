// main thread
const { Worker, MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

const worker1 = new Worker('./worker_1.js', {
  workerData: {
    port: port1
  },
  transferList: [ port1 ],
});

const worker2 = new Worker('./worker_2.js', {
  workerData: {
    port: port2
  },
  transferList: [ port2 ],
});

worker1.postMessage('Send something to your mate!');

setInterval(() => {}, 1000);