
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const saucesCtrl = require('../controllers/sauces');


router.get('/', saucesCtrl.getAllSauces);
router.post('/', saucesCtrl.createSauce);
router.get('/:id', saucesCtrl.getOneSauce);
router.put('/:id', saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);

module.exports = router;