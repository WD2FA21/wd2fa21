/*
let counter = (
  () => {
    // Private Variables
    let privateCounter = 0;
    // Private Function
    let changeBy = (val) => {
        privateCounter += val;
    };
    // Return the "public" stuff
    return {
      increment: () => {
          changeBy(1);
      },
      decrement: () => {
          changeBy(-1);
      },
      value: () => {
          return privateCounter;
      }
    };
  }
)();
*/

let makeCounter = 
  (initialValue) => {
    // Private Variables
    let privateCounter = Number(initialValue) | 0;
    // Private Function
    let changeBy = (val) => {
        privateCounter += val;
    };
    // Return the "public" stuff
    return {
      increment: () => {
          changeBy(1);
      },
      decrement: () => {
          changeBy(-1);
      },
      value: () => {
          return privateCounter;
      }
    };
};

const counter = makeCounter(100);
const anotherCounter = makeCounter(50);

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());