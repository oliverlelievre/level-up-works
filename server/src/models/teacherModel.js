const { getPool } = require("../db");
const pool = getPool();

const register = (name, email, passwordHash) => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			`INSERT INTO missio20_team5.teacher (name,email,password) VALUES (?, ?, ?);`,
			[name, email, passwordHash]
		);
		return rows;
	});
};

const getPassword = (email) => {
	console.log(email);
	return pool.then(async (connection) => {
		console.log(email);
		const [rows] = await connection.execute(
			`SELECT teacher.password FROM missio20_team5.teacher WHERE teacher.email = ?;`,
			[email]
		);
		return rows;
	});
};

const getAllTeachers = () => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			`SELECT * FROM missio20_team5.teacher;`
		);
		return rows;
	});
};

const getTeacherDetailByEmail = (email) => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			"SELECT * FROM missio20_team5.teacher WHERE email = ?;",
			[email]
		);
		return rows;
	});
};

const getTeacherRoleByEmail = (email) => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			`SELECT t.teacher_id,t.name, t.email, r.role_type 
       FROM missio20_team5.teacher AS t 
       LEFT JOIN missio20_team5.roles AS r ON t.role_id = r.role_id 
       WHERE t.email = ?;`, [email]
		);
		return rows;
	});
};


const getTeacherDetailsById = (id) => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(
			`SELECT teacher.teacher_id, teacher.name,teacher.school,teacher.date_of_birth,teacher.contact_number, teacher.email, teacher.profile_pic FROM missio20_team5.teacher WHERE teacher.teacher_id = ?;`,
			[id],
		);
		return rows;
	});
};

module.exports = {
	registerUser: register,
	getPassword,
	getAllTeachers,
	getTeacherDetailsById,
	getTeacherDetailByEmail,
	getTeacherRoleByEmail
};
