// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  //let x = 1;
  for (let i = 1; i < 6; i++) {
    yield i;
  }
}

function* insideGenerator2() {
  //let x = 10;
  for (let i = 10; i <= 15; i++) {
    yield i;
  }
}

function* insideGenerator3() {
  //let x = 6;
  for (let i = 6; i <= 9; i++) {
    yield i;
  }
}

var iterator = myGenerator();

let fifteenArray = [];

for (let i = 0; i < 16; i++) {
  fifteenArray.push(iterator.next().value);
}

//console.log(fifteenArray);
console.log(fifteenArray.join("#, ") + "undefined!");
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
