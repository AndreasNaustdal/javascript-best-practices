'use strict';
function print(input) {
  stringToPrint = input; // here we implicitly create a global var
  console.log(stringToPrint);
}

print('Hi Nerdschool');
console.log(stringToPrint);
