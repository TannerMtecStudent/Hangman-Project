/*Game Setup Variables*/

//Random word selected
let theWord = randomWords();
// Make the word into an Array
let wordArray = theWord.split('');

// Create an array with the same number of underscores as the wordArray. 
let displayArray = [];

wordArray.forEach(function(){
    displayArray.push('_');
});

//Create a variable to store the number of guesses remaining.
let guessesRemaining = 6;
//Create a variable to store the incorrect guesses.
let incorrectGuesses = [];
//Create a variable to store if a guess is correct or not.
let correctGuess = false;
//Create a variable to store the User's latest guess.
let userResponse;
//Create a variable to store if the User's guess was a word or letter. 
let responseType;
//Create a variable to store if the User has won or lost.
let win = false;

/* Functions */

// Error Message
function error(){
  alert(`You have either already guessed that letter or you did not input a letter or word. Try again.`);
};

// Random Word Picker
function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
};

/* Game Logic */
console.log(theWord);
while (win = false && guessesRemaining > 0){
  // User Interface. 
  alert(
    `Correct Guesses: ${displayArray} 
    \nGuesses Remaining: ${guessesRemaining}
    \nIncorrect Letters or Words Guessed: ${incorrectGuesses}`
  );
  userResponse = prompt(`Guess a letter or the whole word:`);
  
  // Validate User's Guess as a String and determine responseType
  if (typeof userResponse === 'string'){
    if (userResponse.length === 1){
      responseType = 'letter';
      console.log(userResponse)
    } else {
      responseType = 'word';
      console.log(userResponse.length);
    };
  } else if (typeof userResponse !== 'string'){
    error();
  };
  
  // Checks if Letter Guess is correct. Adds correct guesses to the User Interface. 
  if (responseType === 'letter'){
    wordArray.forEach(function(letter, index){
      if (letter === userResponse && displayArray[index] === '_'){
        correctGuess = true;
        displayArray[index] = letter;
        console.log(displayArray[index])
        guessesRemaining--;
      } else if (letter === userResponse){
        error();
      };
    });
  };
  
  // Checks if Word Guess is correct. Adds correct guesses to the User Interface.
  if (responseType = 'word'){
    if (userResponse === theWord){
      correctGuess = true;
      displayArray = wordArray;
      guessesRemaining--;
      console.log(theWord)
    };
  };

  //Consequences of Incorrect Guesses pushed to User Interface.
  if (correctGuess = false){
    incorrectGuesses.push(userResponse);
    guessesRemaining--;
    console.log(incorrectGuesses)
  };
  
  // Compares all guesses to the word and continues the game or diplays a winning/losing message if game is complete. 
  
  if (correctGuess = true){ 
    if (displayArray.join('') === theWord || userResponse === theWord){
      console.log(displayArray.join(''));
      win = true;
      alert(`Congratulations! You guessed the word!`);
    }
  }
}; 

if (win = false){
  alert(`You lost! The word was ${theWord}.`);
}