
/*
 * 
 * Inputs: Två ord (två textsträngar)
Ett ord som är gissningen
Ett ord som är det korrekta ordet
Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
letter (bokstaven)



Result (ett av följande värden)

‘incorrect’: Finns inte med i det andra ordet
‘misplaced’: Finns med i det andra ordet, men på annan plats
‘correct’: Korrekt plats i det andra ordet 

Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:

H / incorrect
A / misplaced
L / incorrect (eftersom det redan finns ett korrekt L)
L / correct
Å / incorrect */


const wordList = ["nothing", "David", "Tiger", "Chair", "Rabbet"];

function getWordByIndex(index) { 
    return wordList[index - 1]; // this so I can start from 1 not 0
}

function checkWord(chosenWord, userWord) { // checkWord function with 2 parameters one is the chosen one from the words array and the other is what the user enters.

    const result = []; // initializing an empty results array
    const lowercaseChosenWord = chosenWord.toLowerCase();
    const lowercaseUserWord = userWord.toLowerCase();

    for (let i = 0; i <lowercaseUserWord.length; i++) { //loops through the user input
        const letter = lowercaseUserWord[i]; 
        const correctIndex = lowercaseChosenWord .indexOf(letter);

        if (correctIndex === -1) {
            result.push({ letter: letter, result: 'incorrect' });
        } else if (correctIndex === i) {
            result.push({ letter: letter, result: 'correct' });
        } else {
            result.push({ letter: letter, result: 'misplaced' });
        }
    }

    return result;
}

module.exports = { getWordByIndex, checkWord };



// I started from a little program i had from 2 years ago  and started to change and add things until i reached this code .

// https://replit.com/@William86/Meny#Main.cs
