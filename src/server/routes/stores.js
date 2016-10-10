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

router.get('/:id' ,(req,res,next) =>{
  let id = req.params.id;
  knex('stores').where({'id' : id})
  .then((results) => {
    let renderObj = {};
    renderObj.store = results[0];
    res.render('store', renderObj);
  });
});

module.exports = router;
