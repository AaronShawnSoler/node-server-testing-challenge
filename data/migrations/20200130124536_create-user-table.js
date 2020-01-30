
exports.up = function(knex) {
  return knex.schema
    .createTable('Users', tbl => {
        tbl.increments('user_id');
        tbl.string('username')
            .unique()
            .notNullable();
        tbl.string('email')
            .unique()
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Users');
};
