const { parentPort } = require('worker_threads');

parentPort.on('message', (sharedArray) => {
  console.log('Message for Worker_1 from Parent:', sharedArray);
  console.log('Worker_1, prep for editing!');

  setTimeout(() => {
    Atomics.wait(sharedArray, 0, 102);
    Atomics.store(sharedArray, 1, 1);
    console.log('Worker_1 finished editing!', sharedArray);
    // Atomics.notify(sharedArray, 0, 1);
  }, 100);
});
