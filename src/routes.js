const { Router } = require('express');
const encryptController = require('./controllers/encryptController');

const routes = Router();

routes.post('/word', (request, response) => {
    const encryptedWord = encryptController(request.body);

    return response.status(200).json({ encryptedWord });
});


module.exports = routes;