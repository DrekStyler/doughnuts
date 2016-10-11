const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numOfArr = new Array(200);
  let newD = Array.from(numOfArr).map(() => {
    return createDobj(knex);
  });
  return Promise.all(newD);
};

function createDobj (knex) {
  return knex('doughnuts').insert({
    name: faker.lorem.word(),
    price: faker.commerce.price(),
    toppings: faker.lorem.word()

  });
}
