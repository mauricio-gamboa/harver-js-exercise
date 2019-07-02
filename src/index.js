const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//-------- Task #1 -------------------------------------

function printRandomWords(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i}. ${getRandomWordSync()}`);
    }
}

printRandomWords(100);

//-----------------------------------------------------