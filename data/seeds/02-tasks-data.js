exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      description: 'Building a RDMS',
      notes: 'some notes here',
      completed: true
    },
    {
      project_id: 1,
      description: 'Get supplies from homedepot',
      completed: false
    },
    { project_id: 3, description: 'Find hard hats ', completed: true }
  ]);
};
