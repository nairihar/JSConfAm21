const { parentPort } = require('worker_threads');

parentPort.on('message', (sharedArray) => {
  console.log('Message for Worker_2 from Parent:', sharedArray);
  console.log('Worker_2, prep for editing!');

  setTimeout(() => {
    Atomics.wait(sharedArray, 0, 102);
    Atomics.store(sharedArray, 2, 2);
    console.log('Worker_2 finished editing!', sharedArray);
  }, 100);
});

