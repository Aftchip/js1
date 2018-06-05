// Day5
//FUNCTIONS
// console.log("Hello world");
// array.pop()


function capitalCase(string) { // FUNCTION DEFENITION, No value until you call.
  let words = string.split(' ');
  words.forEach(word => {
    let letters = word.split('');
    let capped = letters[0].toUpperCase();
    letters.splice(0, 1, capped);
  });
  return words.join(' ');
};


let newString = capitalCase("peter piper"); //function CALL.

console.log(newString);
function(stuff) { //anonymous functon
  console.log(stuff)
}


let myCoolFunction = (stuff) => { //SIMPLEST fat arrow functon
  console.log(stuff)
};
