const { Router } = require('express');
const encryptController = require('./controllers/encryptController');

const routes = Router();

routes.post('/word', (request, response) => {
    try {
        const encryptedWord = encryptController(request.body);
        return response.status(200).json({ encryptedWord });
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});


module.exports = routes;