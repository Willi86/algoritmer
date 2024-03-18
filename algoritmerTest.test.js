const { describe, expect, it } = require('@jest/globals');
const { getWordByIndex } = require('./index.js'); 
const { checkWord } = require('./index.js'); 

//checking index is changed and returns the correct place in the array
describe('getWordByIndex()', () => {
    it('Index 1 should return "nothing"', () => {
        const output = getWordByIndex(1);
        expect(output).toBe('nothing');
    });

    it('Index 2 should return "David"', () => {
        const output = getWordByIndex(2);
        expect(output).toBe('David');
    });

    it('Index 3 should not return "Tiger"', () => {
        const output = getWordByIndex(3);
        expect(output) .not.toBe('Lion');
    });

});



//checking lowercase
describe('checkWord()', () => {
    it('should convert both chosen word and user word to lowercase', () => {
        // Define input values
        const chosenWord = 'nothing';
        const userWord = 'NoThInG'; 

        const result = checkWord(chosenWord, userWord);

        expect(result[0].letter).toBe('n');
        expect(result[1].letter).toBe('o');
        expect(result[2].letter).toBe('t');
        expect(result[3].letter).toBe('h');
        expect(result[4].letter).toBe('i');
        expect(result[5].letter).toBe('n');
        expect(result[6].letter).toBe('g');

    });
  });
//Here i check if it returns the correct results (correct , misplaced , incorrect)
    describe('checkWord()', () => {
      it('should return right value (comparing letter placing)', () => {
   
        const chosenWord = 'Tiger';
    
        const userWord = 'tifir'; 
  
        const result = checkWord(chosenWord, userWord);
    
        expect(result).toEqual([
      { letter: 't', result: 'correct' },
      { letter: 'i', result: 'correct' },
      { letter: 'f', result: 'incorrect' },
      { letter: 'i', result: 'misplaced' },
      { letter: 'r', result: 'correct' },
        ]);

    });
  });