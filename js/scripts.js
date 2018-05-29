// // AND
// const name = "Rick";
// const age = null;
//
// if(name || age) {
//   alert('one exist');
// };


// // OR
// const name = "Rick";
// const age = 25;
//
// if(name && age) {
//   alert('both exist');
// };

// // truthy or true
// const name = "Rick";
// // falsey or false
// const age = null;
//
// if(name || age) {
//   alert('one exist');
// };

// const name = "";
// const age = 25;
//
// if(!name && age) {
//   alert('one exist');
// };

// let objectOne = {
//   name: "Rick"
// };
//
// let objectTwo = {
//   name: "Rick"
// };
//
// alert(objectOne == objectTwo); // ALWAYS FALSE, TWO OBJECTS NEVER EQUAL EACH OTHER {}

// var myString = "Pizza";
// var objString = new String('Pizza');
// alert(myString === objString);
// // alert(myString == objString);
//
// let limit = 12;
// console.log(limit);
// limit+= 7;
// console.log(limit);
// limit = limit + 7;
//
// let upperLimit = 23;

// let myNumber = "Ted";
// console.log(myNumber++);

// let numOne = parseInt(prompt('give me number', '10'));
// let numTwo = prompt('give me another number', '10');
// numTwo = parseInt(numTwo);
// alert(numOne + numTwo);
//
// if(numOne > numTwo) {
//   alert("your first number is bigger than your second number")
// } else if(numOne === numTwo) {
//   alert("Theyre the same");
// } else {
//   alert("something went wrong...")
// }
//





let firstName = prompt("What is your first name", "Tom");

switch (firstName.toLowerCase()) {
  case 'tom':
    alert('Hello Tom!');
    break;
  case 'john':
  case 'harry':
  case 'peter':
    alert('your name is very common');
    break;
  default:
    alert('I have nerver heard that name before');
    break;
}









//
