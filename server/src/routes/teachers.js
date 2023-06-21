
const { Router } = require('express');

const {
	login,
	register, getTeachers, getTeacherByEmail, getTeacherById
} = require('../controllers/teacherController');

const router = Router();

// /api/user + /login
router.post('/login', login);

// /api/user + /register
router.post('/register', register);


router.get('/', getTeachers);

router.get('/:id', getTeacherById);

router.get('/details/:email', getTeacherByEmail);

module.exports = router;
