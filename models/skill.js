const todos = [
    {id: 125223, skill: 'Dedicated', done: true},
    {id: 127904, skill: 'Strives to learn more', done: false},
    {id: 139608, skill: 'Fast typer', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }