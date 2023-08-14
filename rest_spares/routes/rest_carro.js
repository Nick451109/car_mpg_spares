const express = require('express');
const router = express.Router();
const { Carro, Persona } = require('../models'); // Asegúrate de importar tus modelos adecuadamente

const claseCarro = require('../models').carro;


router.get('/findAll/json', function (req, res, next) {

  /* MÉTODO ESTÁTICO findAll  */

  claseUser.findAll({
    
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});



// CREATE - Agregar un nuevo carro
router.post('/save', (req, res) => {
  const { placa, modelo, marca, year, km, persona_idpersona } = req.body;

  claseCarro.create({ placa, modelo, marca, year, km, persona_idpersona })
    .then(carro => {
      res.status(201).json(carro);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el carro' });
    });
});

// READ - Obtener todos los carros
router.get('/carros', (req, res) => {
  claseCarro.findAll({ include: [Persona] })
    .then(carros => {
      res.status(200).json(carros);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los carros' });
    });
});

// READ - Obtener un carro por ID
router.get('/findById/:id/json', function(req, res, next) {  

  let id = req.params.id;

  claseCarro.findByPk(id)
      .then(instancia => {
        if(instancia) {
          res.status(200).json(instancia);
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});

// UPDATE - Actualizar un carro por ID
router.put('/update/:id', function(req, res, next) {  

  let id = req.params.id;

  claseCarro.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});



// DELETE - Eliminar un carro por ID
router.delete('/carros/:id', (req, res) => {
  const carroId = req.params.id;

  claseCarro.destroy({ where: { id: carroId } })
    .then(rowsDeleted => {
      if (rowsDeleted === 0) {
        res.status(404).json({ error: 'Carro no encontrado' });
      } else {
        res.status(204).json({ message: 'Carro eliminado exitosamente' });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el carro' });
    });
});

module.exports = router;