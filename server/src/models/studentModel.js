const { getPool } = require('../db');
const pool = getPool();


const register = (name, email, passwordHash) => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(
			`INSERT INTO missio20_team5.student (name,email,password) VALUES (?, ?, ?);`,
			[name, email, passwordHash],
		);
		return rows;
	});
};

const getPassword = (email) => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(
			`SELECT student.password FROM missio20_team5.student WHERE student.email = ?;`,
			[email],
		);
		return rows;
	});
};

const getAllStudents = () => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(`SELECT * FROM missio20_team5.student;`);
		return rows;
	});
};



const getStudentDetailsById = (id) => {
	return pool.then(async (connection) => {
		const [
			rows,
		] = await connection.execute(
			`SELECT student.student_id, student.name, student.school,student.teacher_name,student.course,student.date_of_birth,student.contact_number, student.email, student.profile_pic FROM missio20_team5.student WHERE student.student_id = ?;`,
			[id],
		);
		return rows;
	});
};

const getStudentRoleByEmail = (email) => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			`SELECT s.student_id,s.name, s.email, r.role_type 
       FROM missio20_team5.student AS s 
       LEFT JOIN missio20_team5.roles AS r ON s.role_id = r.role_id 
       WHERE s.email = ?;`, [email]
		);
		return rows;
	});
};



module.exports = { registerUser: register, getPassword, getAllStudents, getStudentDetailsById, getStudentRoleByEmail };
