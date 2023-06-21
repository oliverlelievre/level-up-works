const { getPool } = require("../db");
const pool = getPool();

const getAllProgression = () => {
  return pool.then(async (connection) => {
    const [rows] = await connection.execute(
      `SELECT st.student_id, st.name, (SELECT COUNT(project_id) FROM missio20_team5.student_projects WHERE student_id = st.student_id) AS projects_completed, (SELECT COUNT(project_id) FROM missio20_team5.project) AS total_projects, GROUP_CONCAT(p.project_id SEPARATOR ', ') AS completed_projects_ids, GROUP_CONCAT(p.name SEPARATOR ', ') AS completed_projects_names, GROUP_CONCAT(sp.date_completed SEPARATOR ' |||| ') AS dates_completed FROM missio20_team5.student AS st LEFT JOIN missio20_team5.student_projects AS sp ON st.student_id = sp.student_id LEFT JOIN missio20_team5.project AS p ON sp.project_id = p.project_id GROUP BY st.student_id`
    );
    return rows;
  });
};

module.exports = { getAllProgression };
