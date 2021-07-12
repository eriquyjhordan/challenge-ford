const encrypt = require('../UseCase/encryptUseCase');

function encryptController(body) {
    const { word } = body;

    const encryptedWord = encrypt(word);

    return encryptedWord;
}

module.exports = encryptController;