// Module imports
const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const cors = require("cors");

// Enable express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 2,
});

// Default endpoint

app.get("/", (req, res) => {
  res.send("Hey! The back end is connected!");
});

app.get("/api/students", (req, res) => {
  pool.query("SELECT * FROM student;", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/student_projects", (req, res) => {
  pool.query("SELECT * FROM student_projects;", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/project_count", (req, res) => {
  pool.query("SELECT COUNT(*) FROM project", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/progress_tracker", (req, res) => {
  pool.query(
    "SELECT * FROM student left JOIN student_projects ON student_projects.student_id=student.student_id;",
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/api/progress_tracker1", (req, res) => {
  pool.query(
    "SELECT st.student_id, st.name, (SELECT COUNT(project_id) FROM missio20_team5.student_projects WHERE student_id = st.student_id) AS projects_completed, (SELECT COUNT(project_id) FROM missio20_team5.project) AS total_projects, GROUP_CONCAT(p.project_id SEPARATOR ', ') AS completed_projects_ids, GROUP_CONCAT(p.name SEPARATOR ', ') AS completed_projects_names, GROUP_CONCAT(sp.date_completed SEPARATOR ' |||| ') AS dates_completed FROM missio20_team5.student AS st LEFT JOIN missio20_team5.student_projects AS sp ON st.student_id = sp.student_id LEFT JOIN missio20_team5.project AS p ON sp.project_id = p.project_id GROUP BY st.student_id",
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
console.log("Your PORT is", PORT); // Express in 3000
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in listening", err);
  } else console.log("Listening on port", PORT);
});
