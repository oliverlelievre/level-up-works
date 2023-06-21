
const { Router } = require('express');

const {
	login,
	register, getStudents, getStudentById
} = require('../controllers/studentController');

const router = Router();

// /api/user + /login
router.post('/login', login);

// /api/user + /register
router.post('/register', register);


router.get('/', getStudents);

router.get('/:id', getStudentById);

module.exports = router;
