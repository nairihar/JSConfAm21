const { parentPort } = require("worker_threads");

parentPort.postMessage('Hello!');

setInterval(() => {}, 1000);
