var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
//All actuall paths starty with "/skills"
router.get('/', skillsCtrl.index);


//GET /skills/new <--- Define before show route
 
router.get('/new', skillsCtrl.new)


//GET /skills/:id
router.get('/:id', skillsCtrl.show)




module.exports = router;
