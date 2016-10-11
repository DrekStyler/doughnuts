const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req,res,next) => {
  let renderObj = {};
  knex('employees').select()
  .then((results) => {
    renderObj.employees = results;
    res.render('employees', renderObj);

  });
});

router.get('/new', (req,res,next) => {
  res.render('new_employee');
});

router.post('/new', (req,res,next) => {
  console.log(req.body);
  let email = req.body.email;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let favorite_doughnut = req.body.favorite_doughnut;
  let store_id = req.body.store_id;
  knex('employees').insert({
    first_name:first_name,
    last_name:last_name,
    email:email,
    favorite_doughnut:favorite_doughnut,
    store_id:store_id
  }).then((results) => {
    res.redirect('/');
  });
});

router.get('/:id/edit', (req,res,next) => {
  let id = req.params.id;
  knex('employees').select().where('id',id)
  .then((results) => {
    let renderObj = {};
    renderObj.employee = results[0];
    res.render('edit_employee', renderObj);
  });
});

router.post('/:id/edit', (req,res,next) => {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let favorite_doughnut = req.body.favorite_doughnut;
  let store_id = req.body.store_id;
  knex('employees')
  .update({
    first_name:first_name,
    last_name:last_name,
    email:email,
    favorite_doughnut:favorite_doughnut,
    store_id:store_id
  })
  .where('id',id)
  .then((results) => {
    console.log(results);
    res.redirect('/');
  });
});

router.get('/:id', (req,res,next) => {
  let id = parseInt(req.params.id);
  knex('employees').where({id:id})
  .then((results) => {
    let renderObj = {};
    renderObj.employee = results[0];
    res.render('employee', renderObj);
  });
});

module.exports = router;
