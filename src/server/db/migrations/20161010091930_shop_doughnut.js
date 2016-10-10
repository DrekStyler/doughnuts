exports.up = function(knex, Promise) {
  return knex.schema.createTable('shop_doughnut', (t) => {
    t.increments();
    t.integer('shop_id');
    t.string('doughnut_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shop_doughnut');
};
