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
    create,
    deleteOne,
    edit
  }

  function edit(id, body) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id) 
    skills[idx] = body 
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id) 
    skills.splice(idx, 1);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }