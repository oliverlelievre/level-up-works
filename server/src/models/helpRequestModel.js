const { getPool } = require("../db");
const pool = getPool();


const getAllHelpRequests = () => {
	return pool.then(async (connection) => {
		const [rows] = await connection.execute(
			`SELECT hr.request_id,hr.date_created,(SUBSTRING_INDEX(st.name, ' ', 1))AS first_name, st.gender,st.profile_pic FROM 
missio20_team5.help_request AS hr 
LEFT JOIN  missio20_team5.student AS st ON hr.student_id= st.student_id;`
		);
		return rows;
	});
};


module.exports = {
	getAllHelpRequests
};