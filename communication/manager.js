const { Worker } = require('worker_threads');

const factory = new Worker('./factory/factory.js');

console.log('PID:', process.pid);

factory.on('message', (msg) => {
  console.log('Message from factory:', msg);
});

