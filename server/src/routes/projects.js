
const { Router } = require('express');

const {
	getProjects, getFreeProjects, getPremiumProjects, getBeginnerFreeProjects, getBeginnerPremiumProjects, getIntermediateFreeProjects, getIntermediatePremiumProjects, getAdvanceFreeProjects, getAdvancePremiumProjects
} = require('../controllers/projectController');

const router = Router();

router.get('/', getProjects);
router.get('/free', getFreeProjects);
router.get('/premium', getPremiumProjects);
router.get('/beginner/free', getBeginnerFreeProjects);
router.get('/beginner/premium', getBeginnerPremiumProjects);
router.get('/intermediate/free', getIntermediateFreeProjects);
router.get('/intermediate/premium', getIntermediatePremiumProjects);
router.get('/advance/free', getAdvanceFreeProjects);
router.get('/advance/premium', getAdvancePremiumProjects);





module.exports = router;
