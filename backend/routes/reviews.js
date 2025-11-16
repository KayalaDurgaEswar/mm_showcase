const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/reviewController');

router.get('/', ctrl.list);
router.post('/', ctrl.create); // public reviews allowed
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
