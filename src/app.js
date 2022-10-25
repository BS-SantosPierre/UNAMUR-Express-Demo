require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { router } = require('./routes/index.route');

const app = express();

const { APP_PORT } = process.env;

app.use(cors());

app.get('/hello-world', (_, res) => {
	res.json({ message: 'Hello World' });
});

app.use('/api/v1', router);

app.listen(APP_PORT, () => {
	console.log(`Server listening => ${APP_PORT}`);
});

/**
 * STATUS CODE
 * SUCESS STATUS
 *
 * 200 // Succes
 * 201 // Creation Succes
 * 204 // No Body
 *
 * Erreur 400 - 499
 * 400 // Bad Request
 * 401 // Non authentifié
 * 403 // Pas le droit d'accèder à une resource
 * 404 // Not Found
 * 409 // Soucis au niveau des datas
 * 422 //
 */

/*
	GET /users
	POST /users
	POST /users/create // Pas souvent vu

	PUT /users/:id
	DELETE /users/:id
*/
