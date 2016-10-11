const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req,res,next) => {
  let renderObj = {};
  knex('doughnuts').select()
  .then((results) => {
    renderObj.doughnuts = results;
    console.log(renderObj.doughnuts);
    res.render('doughnuts', renderObj);

  });
});

router.get('/new', (req,res,next) => {
  res.render('new_doughnut');
});

router.post('/new', (req,res,next) => {
  let name = req.body.name;
  let price = req.body.price;
  let toppings = req.body.toppings;
  knex('doughnuts').insert({
    name:name,
    price:price,
    toppings:toppings
  })
  .then((results) => {
    res.redirect('/');
  });
});
router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  knex('doughnuts').select().where('id',id)
  .then((results) => {
      let renderObj = {};
      renderObj.doughnut = results[0];
      res.render('edit_doughnut', renderObj);
    });
});

router.post('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  let name = req.body.name;
  let price = req.body.price;
  let toppings = req.body.toppings;
  knex('doughnuts').update({
    name:name,
    price:price,
    toppings:toppings
  }).where('id', id)
  .then((results) => {
    res.redirect('/');
  });

});
router.get('/:id', (req,res,next) => {
  let id = req.params.id;
  knex('doughnuts').where({id:id})
  .then((results) => {
    let renderObj = {};
    renderObj.doughnut = results[0];
    res.render('doughnut', renderObj);
  });
});

module.exports = router;
