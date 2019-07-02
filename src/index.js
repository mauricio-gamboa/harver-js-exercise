const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

//-------- Helper Functions ----------------------------

function getFizzBuzz(index, callback) {
    const isFizzBuzz = (index % 3 === 0) && (index % 5 === 0);
    const isFizz = index % 3 === 0;
    const isFuzz = index % 5 === 0;

    let text;

    if (isFizzBuzz) {
        text = 'FizzBuzz';
    } else if (isFizz) {
        text = 'Fizz';
    } else if (isFuzz) {
        text = `Fuzz`;
    } else {
        text = callback();
    }

    return text;
}

//-------- Task #1 -------------------------------------

function printRandomWords(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i}. ${getRandomWordSync()}`);
    }
}

// Uncomment to run
// printRandomWords(100);

//-------- Task #2 -------------------------------------

function printRandomWordsFizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        const text = getFizzBuzz(i, getRandomWordSync);
        console.log(`${i}. ${text}`);
    }
}

// Uncomment to run
// printRandomWordsFizzBuzz(100);

//-------- Task #3 -------------------------------------

async function printRandomWordsAsync(number) {
    for (let i = 1; i <= number; i++) {
        const word = await getRandomWord();
        console.log(`${i}. ${word}`);
    }
}

// Uncomment to run
// printRandomWordsAsync(100);

async function printRandomWordsFizzBuzzAsync(number) {
    for (let i = 1; i <= number; i++) {
        const text = await getFizzBuzz(i, getRandomWord);
        console.log(`${i}. ${text}`);
    }
}

// Uncomment to run
// printRandomWordsFizzBuzzAsync(100);

//-------- Task #4 -------------------------------------

function printRandomWordsFizzBuzzErrorHandling(number) {
    const withErrorHandling = () => {
        try {
            return getRandomWordSync({ withErrors: true });
        } catch (error) {
            return "It shouldn't break anything!";
        }
    };

    for (let i = 1; i <= number; i++) {
        const text = getFizzBuzz(i, withErrorHandling);
        console.log(`${i}. ${text}`);
    }
}

// Uncomment to run
// printRandomWordsFizzBuzzErrorHandling(100);

async function printRandomWordsFizzBuzzAsyncErrorHandling(number) {
    const withErrorHandling = async () => {
        try {
            return await getRandomWord({ withErrors: true });
        } catch (error) {
            return "It shouldn't break anything!";
        }
    };

    for (let i = 1; i <= number; i++) {
        const text = await getFizzBuzz(i, withErrorHandling);
        console.log(`${i}. ${text}`);
    }
}

// Uncomment to run
// printRandomWordsFizzBuzzAsyncErrorHandling(100);

//-------- Task #5 -------------------------------------

const dataToSend = [];

for (let i = 1; i <= 100; i++) {
    dataToSend.push(`${i}. ${getFizzBuzz(i, getRandomWordSync)}`);
}

console.log(JSON.stringify(dataToSend));

// Frontend developers

function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(response => response.json());
}

// This is how you would call it in a real life scenario
// postData('http://example.com/test', { data: dataToSend })
//     .then(data => console.log(JSON.stringify(data)))
//     .catch(error => console.error(error));

// Nodejs developers

require('fs')
    .writeFile(
        './src/fizzfuzz.json',
        JSON.stringify(dataToSend),
        error => console.error(error)
    );