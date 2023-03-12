const {Router} = require('express');
const { authUserPost } = require('../controllers/auth');



const router = Router();


router.post("/",authUserPost)

module.exports = router 