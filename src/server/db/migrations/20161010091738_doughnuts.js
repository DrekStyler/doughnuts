
exports.up = function(knex, Promise) {
  return knex.schema.createTable('doughnuts', (t) => {
    t.increments();
    t.string('name');
    t.float('price');
    t.string('toppings');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('doughnuts');
};
