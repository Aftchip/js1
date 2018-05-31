//  DAY 4
// TERNAIRIES

// let inside = true

// if(inside) {
//   console.log('i am inside')
// }else {
//   console.log('i am not inside')
// }
// condition ?  expression1 : expresion2

// let example2 = inside ? "i am inside" : "ia m not inside"
// console.log(example2)

// let number = 15;
//
// console.log(number > 10 ? "number is greater than" : "number is less than")

// let name = false;
// let email = false;

// if(name) {
//   alert("i have name")
// }
// else if (email) {
//   alert("i have email")
// }
// else {
//   alert("i have none")
// }

// name ? "i have name" : email ? "i have email" : "i have none"
// console.log(name ? "i have name" : email ? "i have email" : "i have none")


// let iAmHungry = true;
// let money = 5;
//
// let hungry = iAmHungry ? ((money > 10)? "i am hungry an i have more than 10" : " i am hungry and i have less than 10" ) : ((money > 10)? "i am not hungry and i have more than 10" : "i am not hungry and i have less than 10")
//
// console.log(hungry);
// if (iAmHungry) {
//   of (money > 10) {
//     'i am hungry and i have more than 10'
//   } else {
//     'i am hungry and i have less than 10'
//   } else {
//     if (money > 10)
//     'i am not hungry and i have more thann 10'
//   } else {
//     'i am not hungry and i have less than 10'
//   }
// }



// let iAmWeraingYellow = false;
//
// iAmWeraingYellow ? "yes i am wearing yellow" : "no i am not"
//
// let number = 23;
//
// let num = (number = 23 || iAmWeraingYellow) ? "number = 23 and/or yellow" : "number not 23 and not yellow"
// console.log(num)





//
// Day 4
// ARRAYS []

// let arr = ["javascript", 100, {}, [], true];
//
// console.log(arr[0]);

// On your day4 branch, declare a var and define it with an array containing:
// Your favorite movie of 2017
// Your lucky number
// Whether or not you are a Star Wars fan (using a Boolean)
// The year you graduated high school
// console.log the var and the length of the array.

// TRY OUT #1
// let me = ["John Wick 2", 21, true, "Class of 2010"];
// console.log(me[me.length -1]);
// console.log(me[3])
// console.log(me[2])
//
//
// me.push("Pizza");
// console.log(me);
// me.pop();
// console.log(me);

// me.splice(2);//one argument will remove that index and everything after
// me.splice(2, 1) //with 2 arguments you start removing items at the first argumnt (index) and then remove only the number of items that you passed in as the second argument (delete count).
// me.splice(2, 1, false)
// console.log(me, "this is the result of the splice");


// const products = [["blanket", [12.99, 10.99], "the best blanket ever"], ['rattle', 4.99, "it rattles man..."], ['diapers', 12.99, "they catch the doo doo"]];
// alert(products[0][1][1]);



// In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
//
// Add all of these arrays to a final array named favoriteMovies
// Create an array with just the titles of your favorite movies and alert it
// Create another array with your favorite and least favorite of the top 5 and console.log it.
// Check the length of your favoriteMovies array by alerting it.



let favMovie = ['MIB', "j"];
let secondFav = ['John Wick', "John"];
let thirdFav = [];
let fourthFav = [];
let fifthFav = [];

let favoriteMovies = [];
favoriteMovies.push(favMovie, secondFav, thirdFav);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], );







//
