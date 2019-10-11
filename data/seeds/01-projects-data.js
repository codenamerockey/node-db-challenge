exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'RDMS',
      description: 'This will be a fresh build of a database',
      completed: true
    },
    {
      name: 'Renovation',
      description: 'Help with building a house',
      completed: true
    },
    { name: 'Construction', completed: false }
  ]);
};
