let choices = ["r", "p", "s"];
let userInput = prompt("Choose r, p or s");
let computerInput = Math.floor(Math.random() * 3); //Picks a random number from 0,1,2

let computerString;

if (computerInput == "0") {
    computerString = "r";
 } else if (computerInput == "1") {
        computerString = "p";
     } else  computerString = "s";
        
    
let userWins = 0;
let userLoses = 0;
let ties = 0;


if (userInput == null || userInput == "") {
    text = "User cancelled the prompt.";
    console.log(text);
  } else 
    if (userInput === computerString) {
            text = "It's a tie";
            console.log(text);
            ties++;
            console.log(ties);
        } else {
            switch (computerInput) {
                case 0:
                  text = "Off";
                  break;
                case 1:
                 text = "On";
                  break;
                default:
                  text = "No value found";
              }
        }
  



//   if (userInput == null || userInput == "" || userInput !== "r" || userInput !== "s" || userInput !== "p") {
//     text = "You need to enter R P or S to play this game.";
//   } else {
//     text =  ;
//   }

// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//    text = "On";
//     break;
//   default:
//     text = "No value found";
// }