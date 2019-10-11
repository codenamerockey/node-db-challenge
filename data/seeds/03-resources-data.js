exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'computer' },
    { name: 'tools' },
    { name: 'steam roller' }
  ]);
};
