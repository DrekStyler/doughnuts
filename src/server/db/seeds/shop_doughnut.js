
exports.seed = function(knex, Promise) {
  let numOfArr = new Array(30);
  let newJoin = Array.from(numOfArr).map(() => {
    return newJoinItem(knex);
  });
  return Promise.all(newJoin);
};

function doughnutShop () {
  return Math.ceil(Math.random() * 20);
}

function newJoinItem(knex) {
  return knex('shop_doughnut').insert({
    shop_id: doughnutShop(),
    doughnut_id: doughnutShop()
  });
}
