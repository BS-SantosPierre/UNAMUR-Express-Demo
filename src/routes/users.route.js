const { parseParam } = require('../middlewares/parse-param.middleware');
const jsonMiddleware = require('express').json;
const userRouter = require('express').Router();
const userController = require('./../controllers/users.controller');

// /users
userRouter.route('')
	// Get all users
	.get(userController.getAll)
	// Create user
	.post(jsonMiddleware(), userController.create);

userRouter.route('/:id')
	.get(parseParam('id'), userController.getOne)

module.exports = {
	userRouter
};
