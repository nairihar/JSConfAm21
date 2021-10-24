const { workerData } = require('worker_threads');

const { port } = workerData

port.postMessage('Hello from thread!');

setInterval(() => {}, 1000);
