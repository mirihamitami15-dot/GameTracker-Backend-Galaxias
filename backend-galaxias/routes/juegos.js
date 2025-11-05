// routes/juegos.js (Rutas del Sector de Juegos)
const express = require('express');
const router = express.Router();
const Juego = require('../models/Juego'); // Importar el Modelo

// GET /api/juegos - Buscar todos los juegos [cite: 53]
router.get('/', async (req, res) => {
  try {
    // Buscar todos los documentos de juegos en la DB
    const juegos = await Juego.find(); 
    res.status(200).json(juegos);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar juegos: ' + error.message });
  }
});

// POST /api/juegos - Agregar un nuevo juego [cite: 53]
router.post('/', async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save(); 

    // Respuesta exitosa (código 201: Creado)
    res.status(201).json(juegoGuardado); 
  } catch (error) {
    // Manejo de errores de validación (e.g., campo requerido faltante)
    res.status(400).json({ message: 'Error al agregar el juego: ' + error.message });
  }
});

module.exports = router;