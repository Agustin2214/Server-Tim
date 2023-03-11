const { Router } = require('express')

const { UserGet }  =require('../controllers/user')

const router = Router()


router.get('/', UserGet );



module.exports = router;