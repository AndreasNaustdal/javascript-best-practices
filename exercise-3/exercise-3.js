var myMessage = 'A message';

function printStuff() {
  myMessage = 'Testing 123'; // changed
  console.log(myMessage);
  var myMessage; // added
}
printStuff();
console.log(myMessage); // changed
