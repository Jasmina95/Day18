const _ = require("lodash");

// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  let x = 1;
  for (let i = 0; i < 5; i++) {
    yield x++;
  }
}

function* insideGenerator2() {
  let x = 10;
  for (let i = 0; i <= 5; i++) {
    yield x++;
  }
}

function* insideGenerator3() {
  let x = 6;
  for (let i = 0; i < 4; i++) {
    yield x++;
  }
}

var iterator = myGenerator();

let fifteenArray = [];

let str = "";

for (let i = 0; i < 15; i++) {
  fifteenArray.push(iterator.next().value);
  if (i === 14) {
    str += fifteenArray[i] + "#, undefined!";
  } else {
    str += fifteenArray[i] + "#, ";
  }
}

console.log(str);

//console.log(_.map(fifteenArray).join("#, ") + "#, undefined!");
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
