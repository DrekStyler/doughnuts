const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req,res,next) => {
  let renderObj = {};
  knex('stores').select()
  .then((results) => {
    renderObj.stores = results;
    console.log(renderObj.doughnuts);
    res.render('stores', renderObj);

  });
});

router.get('/new', (req, res, next) => {
  res.render('new_store');
});

router.post('/new', (req,res,next) => {
  let city = req.body.city;
  let name = req.body.name;
  knex('stores').insert({
    name:name,
    city:city
  }).then((results) => {
    res.redirect('/');
  });
});

router.get('/:id/edit', (req,res,next) => {
  let id = req.params.id;
  knex('stores').where('id',id)
  .then((results) => {
    let renderObj = {};
    renderObj.store = results[0];
    res.render('edit_store', renderObj);
  });
});

router.post('/:id/edit', (req,res,next) => {
  let id = req.params.id;
  let city = req.body.city;
  let name = req.body.name;
  knex('stores').update({
    name:name,
    city:city
  }).where('id',id)
  .then((results) => {
    console.log('res',results);
    console.log(req.body);
    res.redirect('/');
  });
});
//this code is disgusting I am so sorry
router.get('/:id', (req,res,next) => {
  let dough = [];
  let renderObj = {};
  let id = req.params.id;
  knex('shop_doughnut').where({shop_id:id})
  .then((results) => {
    results.forEach((result) => {
        knex('doughnuts').where({id:result.doughnut_id})
      .then((results) => {
        console.log('kk',results);
        dough.push(results[0]);
        renderObj.doughnuts = dough;
      }).then((results) => {
        
        knex('stores').where({id:id})
        .then((results) => {
          renderObj.store = results;
          console.log('final',renderObj);
          res.render('store', renderObj);
        });
      });
    });
  });
});



module.exports = router;
