
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {user_id: 1, username: 'asoler', email: 'asoler@domain.com'},
        {user_id: 2, username: 'cadams', email: 'cadams@teamlead.com'},
        {user_id: 3, username: 'lambdaschool', email: 'school@lambda.com'}
      ]);
    });
};
