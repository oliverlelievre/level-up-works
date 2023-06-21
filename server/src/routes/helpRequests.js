
const { Router } = require('express');

const {
	getHelpRequests
} = require('../controllers/helpRequestController');

const router = Router();

// /api/user + /login
router.get('/', getHelpRequests);



module.exports = router;
