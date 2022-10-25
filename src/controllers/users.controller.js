const users = require('./../../data/users.json');
const fs = require('fs/promises');

const usersController = {
	getAll: (req, res) => {
		res.json(users.data);
	},

	getOne: (req, res) => {
		const user = users.data.find((user) => user.id === req.validParam);

		if (!user) {
			res.status(404).json({ message: `User with id: ${req.params.id}. Does not exist` });
		}

		res.json(user);
	},

	create: async (req, res) => {
		users.data.push({ ...req.body, id: ++users.lastIndex });
		const newContent = JSON.stringify(users, null, 2);

		try {
			await fs.writeFile('data/users.json', newContent);
			res.status(201).json({ message: 'created' });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: "Something went wrong! Try again" });
		}
	}
}

module.exports = usersController;
