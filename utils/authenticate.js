const bycript = require('bcrypt');
const User = require('../models/User');
const createToken = require('./createToken');

const authenticate = ({ email, password }) => {
	return new Promise((resolve, reject) => {
		User.findOne({ email }).then((user) => {
			if (!user) reject(new Error("User does not exist"));
			bycript.compare(password, user.password, (err, IsValid) => {
				if (err) reject(new Error("Error to create token"));
				IsValid ? resolve(createToken(user)) : reject(new Error("Password not match"))
			})

		}).catch(e => reject(e));
	});

};

module.exports = authenticate;
