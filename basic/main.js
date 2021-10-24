const { Worker } = require('worker_threads');

 console.log('PID:', process.pid);
/*
const worker = new Worker('./worker.js');

console.log('PID:', process.pid);

worker.on('message', (msg) => {
  console.log('Message from thread:', msg);
});

*/

setInterval(() => {}, 1000);
