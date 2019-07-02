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

//-------- Task #2 -------------------------------------

function printRandomWordsFizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        const isFizzBuzz = (i % 3 === 0) && (i % 5 === 0);
        const isFizz = i % 3 === 0;
        const isFuzz = i % 5 === 0;

        let text;

        if (isFizzBuzz) {
            text = 'FizzBuzz';
        } else if (isFizz) {
            text = 'Fizz';
        } else if (isFuzz) {
            text = `Fuzz`;
        } else {
            text = getRandomWordSync();
        }

        console.log(`${i}. ${text}`);
    }
}

printRandomWordsFizzBuzz(100);