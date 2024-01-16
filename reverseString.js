//Using split, reverse, and join:
const originalString = 'Hello, World!';
const reversedString = originalString.split('').reverse().join('');

console.log(reversedString);  // Output: '!dlroW ,olleH'

//Using a for loop:

function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }
    return reversed;
  }
  
  const result = reverseString('Hello, World!');
  console.log(result);  // Output: '!dlroW ,olleH'

  
  //using array.from
  const originalString1 = 'Hello, World!';
const reversedString1 = Array.from(originalString1).reverse().join('');

console.log(reversedString1);  // Output: '!dlroW ,olleH'

//reduce
const originalString2 = 'Hello, World!';
const reversedString2 = originalString2.split('').reduce((acc, char) => char + acc, '');

console.log(reversedString2);  // Output: '!dlroW ,olleH'

//reverse each word in a sentence
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      // Reverse the characters of each word
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const originalSentence = 'Hello Shravani, how are you?';
  const reversedSentence = reverseWordsInSentence(originalSentence);
  
  console.log(reversedSentence);
  // Output: 'olleH inavarhS, woh era ?uoy'
  