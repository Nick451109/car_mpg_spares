const express = require('express');
const router = express.Router();
const { Carro, Persona } = require('../models'); // Asegúrate de importar tus modelos adecuadamente

// CREATE - Agregar un nuevo carro
router.post('/carros', (req, res) => {
  const { placa, modelo, marca, year, km, persona_idpersona } = req.body;

  Carro.create({ placa, modelo, marca, year, km, persona_idpersona })
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
  Carro.findAll({ include: [Persona] })
    .then(carros => {
      res.status(200).json(carros);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los carros' });
    });
});

// READ - Obtener un carro por ID
router.get('/carros/:id', (req, res) => {
  const carroId = req.params.id;

  Carro.findByPk(carroId, { include: [Persona] })
    .then(carro => {
      if (!carro) {
        res.status(404).json({ error: 'Carro no encontrado' });
      } else {
        res.status(200).json(carro);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el carro' });
    });
});

// UPDATE - Actualizar un carro por ID
router.put('/carros/:id', (req, res) => {
  const carroId = req.params.id;
  const { placa, modelo, marca, year, km, persona_idpersona } = req.body;

  Carro.update({ placa, modelo, marca, year, km, persona_idpersona }, { where: { id: carroId } })
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 0) {
        res.status(404).json({ error: 'Carro no encontrado' });
      } else {
        res.status(200).json({ message: 'Carro actualizado exitosamente' });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el carro' });
    });
});

// DELETE - Eliminar un carro por ID
router.delete('/carros/:id', (req, res) => {
  const carroId = req.params.id;

  Carro.destroy({ where: { id: carroId } })
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