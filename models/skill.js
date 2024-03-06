const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'JavaScript', done: true},
    {id: 4, skill: 'Express', done: false},
    {id: 5, skill: 'JQuery', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 10
    skill.done = false
    skills.push(skill)
  }