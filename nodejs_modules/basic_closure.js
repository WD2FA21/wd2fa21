const add = (
  () => {
    // A "Private" variable
    let counter = 0;
    
    return () => {
      return counter += 1;
    };
  }
)();

add();
add();
add();

console.log(add());