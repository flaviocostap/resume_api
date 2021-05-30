const express = require('express');
const morgan = require('morgan');
const app = express();

const productsRoutes = require('./routes/products')
const claimsRoutes = require('./routes/claims')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, rest) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow,Header',
    'Origin, Content-Type, X-Requested-With, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATH, DELETE, GET');
    return res.status(200).send({});
  }

  next(); 
});

app.use('/products', productsRoutes);
app.use('/claims', claimsRoutes);

app.use((req, res, next) => {
  const error = new Error('Rota não encontrada');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message
    }
  });
});

module.exports = app;