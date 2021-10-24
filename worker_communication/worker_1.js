const { parentPort, workerData } = require('worker_threads');

parentPort.on('message', (message) => {
  console.log('Message for Worker_1 from Parent:', message);

  workerData.port.postMessage('Hey bro!');
});

workerData.port.on('message', (message) => {
  console.log('Message for Worker_1 from Worker_2:', message);
});


setInterval(() => {}, 1000);



