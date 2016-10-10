exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores', (t) => {
    t.increments();
    t.string('city');
    t.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stores');
};
