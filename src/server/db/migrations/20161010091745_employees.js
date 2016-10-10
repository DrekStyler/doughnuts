
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', (t) => {
    t.increments();
    t.string('first_name');
    t.string('last_name');
    t.integer('favorite_doughnut').references('id').inTable('doughnuts');
    //seed needs to be changed
    t.string('store_id');
    t.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employees');
};
