// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (let x = 1; x < 6; x++) {
    yield x;
  }
}

function* insideGenerator2() {
  for (let x = 10; x <= 15; x++) {
    yield x;
  }
}

function* insideGenerator3() {
  for (let x = 6; x <= 9; x++) {
    yield x;
  }
}

var iterator = myGenerator();

let fifteenArray = [];

for (let i = 0; i < 16; i++) {
    let x = iterator.next();
    if (x.done === true) {
        fifteenArray.push("undefined!")
    } else {
        fifteenArray.push(x.value);
    }
    
}

console.log(fifteenArray);
console.log(fifteenArray.join("#, "));
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
