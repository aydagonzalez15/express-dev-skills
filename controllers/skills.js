const Skills = require('../models/skill')

module.exports = {
    index,
    show,
    new : newSkill
};

function newSkill(req, res){
  res.render('skills/new', { 
    title: 'New Skill'
  })
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skills.getAll(),
      title: 'All Skills'
    });
  }

function show(req, res) {
  res.render('skills/show', {
    skill: Skills.getOne(req.params.id),
    title: 'Skills Details'
  })
}
 