// To simulate sleep
// function sleep(ms_duration) {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + ms_duration);
// }


// console.log('Step 1');
// console.log('Step 2');
// sleep(1000);
// console.log('Step 3');
// sleep(10000);
// console.log('Step 4');

console.log('Step 1');
setTimeout(() => {
    console.log('Step 3');
    console.log('Step 5');
}, 10000);
console.log('Step 2');
console.log('Step 4');