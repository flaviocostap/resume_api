const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    products: ['ps5', 'dualsense'],
    total: 5500.00,
    currency: 'BRL'
  })
});

router.get('/:claim_id', (req, res, next) => {
  const id = req.params.claim_id
  let message
  if (id === '1') {
    message = 'primeiro pedido'
  } else {
    message = 'id não identificado'
  }
  res.status(200).send({
    message: message,
    id: id
  })
});

router.post('/', (req, res, next) => {
  const claim = {
    product_id: req.body.product_id,
    quantity: req.body.quantity
  }
  res.status(201).send({
    message: 'pedido criado', 
    claim: claim
  })
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