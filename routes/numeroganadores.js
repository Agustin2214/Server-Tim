const {Router} = require('express');
const { numeroGet,numeroPost, numeroDelete, numeroGetName } = require('../controllers/numeroganadores');

const router = Router();


router.get("/",numeroGet)
router.get("/name",numeroGetName)
router.post('/',numeroPost)
router.delete('/',numeroDelete)
module.exports = router;
     