const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numOfArr = new Array(100);
  let newS = Array.from(numOfArr).map(() => {
    return newStore(knex);
  });
  return Promise.all(newS);
};

function newStore (knex) {
  return knex('stores')
  .insert({
    city: faker.address.city(),
    name: faker.lorem.word()
  });
}
