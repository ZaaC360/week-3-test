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
