const { Worker, parentPort } = require('worker_threads');

parentPort.postMessage('Hello form factory!');

const worker = new Worker('./factory/worker.js', {
    workerData: {
      port: parentPort
    },
    transferList: [ parentPort ],
});

setInterval(() => {}, 1000);
