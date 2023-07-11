const todos = [
    {id: 125223, skill: 'JavaScript', fluent: true},
    {id: 127904, skill: 'CSS', fluent: true},
    {id: 139608, skill: 'Full Stack Engineering', fluent: false}
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