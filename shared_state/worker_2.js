const { workerData } = require('worker_threads');

console.log('Worker 2:', workerData.sharedArray);

setInterval(() => {}, 1000);
