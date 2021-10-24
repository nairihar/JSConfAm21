import { runOnThread } from 'funthreads';

console.log('PID:', process.pid);

runOnThread(() => {
  return 2 ** 10;
})
  .then((num) => {
    console.log(`Result: ${num}`);
  })
  .catch((err) => {
    console.error(err);
  });

setInterval(() => {}, 1000);
