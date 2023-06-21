const express = require("express");
const cors = require("cors");

const morgan = require("morgan");

// Loads environment variables from a '.env' file stored in the project root
const dotenv = require("dotenv").config();

const { port } = require("./config");

// Middleware functions to be used
const { connect } = require("./db");
const { errorHandler, allowCORS } = require("./middlewares");

// Routers to be used
const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const projectsRouter = require("./routes/projects");
const helpRequestsRouter = require("./routes/helpRequests");
const progressTrackerRouter = require("./routes/progressTracker");

// Init express
const app = express();
// Inbuilt json middleware
app.use(express.json());

// CORS Middleware
app.use(cors(``));
app.all('/*', allowCORS); // A middleware to allow all CORS requests


// Serve static files from the public folder
app.use(express.static("public"));

//Logger to console
app.use(morgan("tiny"));

// Registering Routers
app.use("/api/v1/student", studentsRouter);
app.use('/api/v1/teacher', teachersRouter);
app.use("/api/v1/projects", projectsRouter);
app.use('/api/v1/help-requests', helpRequestsRouter);
app.use("/api/v1/progressTracker", progressTrackerRouter);

// 404 error
app.all("*", (req, res, next) => {
	const err = new HttpException(404, `Endpoint ${req.url} Not Found`);
	next(err);
});

// Error middleware - placed last, after all other middle wares and route handlers
app.use(errorHandler);

// Starting the server after connecting to DB
const startServer = async () => {
	try {
		await connect();
		app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
	} catch (e) {
		console.error(e);
	}
};

startServer();
