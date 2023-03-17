const {Router} = require('express');
const { apuestaGet,apuestaPost, apuestaDelete, apuestaGetName } = require('../controllers/apuesta');

const router = Router();


router.get("/",apuestaGet)
router.get("/name",apuestaGetName)
router.post('/',apuestaPost)
router.delete('/',apuestaDelete)
module.exports = router;
     