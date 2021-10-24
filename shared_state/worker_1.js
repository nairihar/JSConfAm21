const { workerData } = require('worker_threads');

workerData.sharedArray[0] = 11;

console.log('Worker 1:', workerData.sharedArray);

setInterval(() => {}, 1000);
