const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numOfArr = new Array(100);
  let newE = Array.from(numOfArr).map(() => {
      return newEmployee(knex);
    });
  return Promise.all(newE);
};

function store_id() {
  return Math.ceil(Math.random() * 20);
}

function fave() {
  return Math.ceil(Math.random() * 20);
}

function newEmployee (knex) {
  return knex('employees')
  .insert({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    favorite_doughnut: fave(),
    store_id: store_id(),
    email: faker.internet.email()
  });
}
