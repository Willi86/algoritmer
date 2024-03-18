// userInput.js

/*const { getWordByIndex, checkWord } = require('./index');

const wordList = ["nothing", "David", "Tiger", "Chair", "Rabbet"];

console.log("Choose a word index between 1 and", wordList.length);
process.stdin.once('data', (data) => {
    const userInput = parseInt(data.toString().trim());

    if (isNaN(userInput) || userInput < 1 || userInput > wordList.length) {
        console.log("Invalid input. Please enter a number between 1 and", wordList.length);
    } else {
        const chosenWord = getWordByIndex(userInput);
        const numberOfLetters = chosenWord.length;

        console.log("You chose a word with", numberOfLetters, "letters.");
        console.log("Enter a word to check against the chosen word:");

        process.stdin.once('data', (data) => {
            const userWord = data.toString().trim();

            const result = checkWord(chosenWord, userWord);

            console.log(result);

            process.exit();
        });
    }
});
*/