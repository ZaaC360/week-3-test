var x = 10;
function test() {
  console.log(x);
  var x = 20;
  function inner() {
    console.log(x);
  }
  inner();
}
test();

// the output is undefined, 20, as var x is console.log inside the test function there will be no defined x, 
// while in the inner function it got var x as 20 by its parent function

