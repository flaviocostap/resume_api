const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    name: 'ps5',
    price: 5000.00,
  })
});

router.get('/:product_id', (req, res, next) => {
  const id = req.params.product_id
  let message
  if (id === '1') {
    message = 'primeiro produto'
  } else {
    message = 'id não identificado'
  }
  res.status(200).send({
    message: message,
    id: id
  })
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
    
  }
  res.status(201).send({
    message: 'produto criado',
    product: product
  });
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    message: 'usand DELETE'
  })
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
    message: 'usand PATCH'
  })
});

module.exports = router;