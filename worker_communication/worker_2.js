const { workerData } = require('worker_threads');

workerData.port.on('message', (message) => {
  console.log('Message for Worker_2 from Worker_1:', message);

  workerData.port.postMessage('Love you bro!');
});

setInterval(() => {}, 1000);

