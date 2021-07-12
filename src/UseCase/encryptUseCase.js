const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function rotate (index = 0) {
   const newAlphabet = [...letters];
   if (typeof index === 'number' && index % 1 === 0) {
       const pushed = newAlphabet.slice(0, index);
       newAlphabet.splice(0, index);
       newAlphabet.sort();
       return newAlphabet.concat(pushed);
   } else {
       throw new Error('The value of index must be a number and integer!');
   }
}

function encrypt(word) {
   const rotateNumber = Math.floor(Math.random() * 26) + 1;
   let cipherText = '';
   const AlphabetCipher = rotate(rotateNumber);
   for (let letter of word) {
      let letterItem = letters.indexOf(letter);
      cipherText += (AlphabetCipher[letterItem]) ? AlphabetCipher[letterItem] : letter;
  }
  return cipherText;
}

module.exports = encrypt;