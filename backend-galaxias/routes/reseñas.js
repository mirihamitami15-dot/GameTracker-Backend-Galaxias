// routes/reseñas.js (Rutas de Registro de Bitácora)
const express = require('express');
const router = express.Router();
const Reseña = require('../models/Reseña'); 

// POST /api/reseñas - Agregar una nueva reseña 
router.post('/', async (req, res) => {
  try {
    const nuevaReseña = new Reseña(req.body);
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    res.status(400).json({ message: 'Error al agregar la reseña: ' + error.message });
  }
});

module.exports = router;