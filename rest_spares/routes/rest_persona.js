const express = require('express');
const router = express.Router();
const clasePersona = require('../models').persona;

router.get('/findAll/json', function (req, res, next) {
  
  /* MÉTODO ESTÁTICO findAll  */

  clasePersona.findAll({
    
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});



// CREATE - Agregar un nuevo carro
router.post('/save', (req, res) => {
  const { nombre, apellido } = req.body;

  clasePersona.create({ nombre, apellido })
    .then(persona => {
      res.status(201).json(persona);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la persona' });
    });
});

// READ - Obtener un carro por ID
router.get('/findById/:id/json', function(req, res, next) {  

  let id = req.params.id;

  clasePersona.findByPk(id)
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

  clasePersona.findByPk(id)
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
router.delete('/delete/:id', function(req, res, next) {  

  let id = req.params.id;

  clasePersona.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.destroy()
          .then(() => {
            res.status(204).json({ mensaje: 'Registro eliminado'});
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

module.exports = router;