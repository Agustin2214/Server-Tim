const { Router } = require('express')

const { UserGet, userPost }  =require('../controllers/user')

const router = Router()


router.get('/', UserGet );
router.post('/',userPost)


module.exports = router;