const { resultToJSON, getSaltedHash, checkPassword, generateJWTSecretKey, setToken, setRole, setEmail, setUserID } = require('../utils');
const jwt = require('jsonwebtoken');
const {
	getPassword,
	registerUser,
	getAllStudents, getStudentDetailsById, getStudentRoleByEmail
} = require('../models/studentModel');

// The login controller which is called when we localhost:4000/api/user/login
const login = async (req, res) => {
	const { email, password } = req.body;
	// Gets the password for a particular email id.
	// getPassword here is running the DB query and returning the result to the controller here.

	const queryResult = await getPassword(email);

	// Converts the query result to JSON
	const jsonResult = resultToJSON(queryResult);

	if (jsonResult.length === 0) {
		res.status(401).send('Could not find a user with the provided email id');
	} else {

		const roleQuery = await getStudentRoleByEmail(email);
		const roleJSON = resultToJSON(roleQuery);

		const secretKey = await generateJWTSecretKey();

		const [{ password: passwordHash }] = jsonResult;

		const [{ student_id: userID, name, email: userEmail, role_type: role }] = roleJSON;

		const isValidPassword = checkPassword(password, passwordHash);

		if (isValidPassword) {

			const token = jwt.sign({ student_id: userID, name, email: userEmail, role_type: role }, secretKey);

			setToken(token);
			setRole(role);
			setEmail(userEmail);
			setUserID(userID);

			res.status(200).json({ message: 'Successfully logged in user!', token, userID, userEmail, role });

		} else {
			res.status(401).send('Invalid password.');
		}
	}
};

const register = async (req, res) => {
	const { name, email, password } = req.body;
	const passwordHash = getSaltedHash(password);
	console.log(passwordHash);
	const queryResult = await registerUser(name, email, passwordHash);
	res.status(200).json(queryResult);
};

const getStudents = async (req, res) => {
	const queryResult = await getAllStudents();
	const jsonResult = resultToJSON(queryResult);
	res.status(200).json(jsonResult);
}

const getStudentById = async (req, res) => {
	const { id } = req.params;
	const queryResult = await getStudentDetailsById(id);
	const jsonResult = resultToJSON(queryResult);

	res.status(200).json(jsonResult);
};

module.exports = {
	login,
	register, getStudents, getStudentById
};
