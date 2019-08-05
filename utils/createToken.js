const jwt = require('jsonwebtoken');


const createToken = ({_id, email}) => {

	const date = new Date();
	const exp = date.setDate(date.getDate() + 1);

	const payload = {
		_id,
		email,
		exp
	}
	return jwt.sign(payload, process.env.SECRET_KEY);
}

module.exports = createToken;
