const { Router } = require("express");

const { getAllProgress } = require("../controllers/progressTrackerController");

const router = Router();

router.get("/", getAllProgress);
// // /api/user + /login
// router.post('/login', login);

// // /api/user + /register
// router.post('/register', register);

module.exports = router;
