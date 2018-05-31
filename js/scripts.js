// TAKEHOME DAY 3

let yourName = prompt("What is your name?", "John");
let favColor = prompt("Out of these ten colors, red, orange, yellow, green, blue, pink, purple, black, white, and grey pick your favorite?");

switch (favColor.toLowerCase()) {
  case 'red':
      alert(yourName + ',' + " " + 'the color of blood and fire.')
    break;
  case 'orange':
      alert(yourName + ',' + " " + 'Orange is representative of “gluttony” just saying!')
    break;
  case 'yellow':
      alert(yourName + ',' + " " + 'you must seem to stand out like the sun.')
    break;
  case 'green':
      alert(yourName + ',' + " " + 'the grass isn\'t always greener but money is!')
    break;
  case 'blue':
      alert(yourName + ',' + " " + 'blue is not your color.')
    break;
  case 'pink':
      alert(yourName + ',' + " " + 'you must be delicate, sweet, nice, playful, cute, romantic, charming, feminine, or just a princess.')
    break;
  case 'purple':
      alert(yourName + ',' + " " + 'royalty, nobility, luxury, power, and ambition. Suits you well!')
    break;
  case 'black':
      alert(yourName + ',' + " " + 'the mysterious one!')
    break;
  case 'white':
      alert(yourName + ',' + " " + 'the chosen one!')
    break;
  case 'grey':
      alert(yourName + ',' + " " + 'wow you must be dull.')
    break;
  default:
  alert('Either you misspelled the color, or I\'ve never heard of it?')
};
