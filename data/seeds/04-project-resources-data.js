exports.seed = function(knex) {
  return knex('project_resources').insert([
    { project_id: 1, resource_id: 1, notes: 'some notes here' },
    { project_id: 2, resource_id: 2 },
    { project_id: 3, resource_id: 3, notes: 'some more notes here' }
  ]);
};
