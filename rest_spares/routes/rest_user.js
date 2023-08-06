var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const claseUser = require('../models').carro;


router.get('/findAll/json', function (req, res, next) {

  /* MÉTODO ESTÁTICO findAll  */

  claseUser.findAll({
    attributes: { exclude: ["placa"] },
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});

module.exports = router;