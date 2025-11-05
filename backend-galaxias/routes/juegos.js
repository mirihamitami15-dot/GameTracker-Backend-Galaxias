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

// PUT /api/juegos/:id - Editar un juego [cite: 53]
router.put('/:id', async (req, res) => {
  try {
    const juegoEditado = await Juego.findByIdAndUpdate(
      req.params.id, // ID del juego a editar (viene de la URL)
      req.body,      // Datos a actualizar (viene del cuerpo)
      { new: true, runValidators: true } // Opciones: devuelve el objeto actualizado y valida
    );

    if (!juegoEditado) {
      return res.status(404).json({ message: 'Juego no encontrado en la base estelar.' });
    }
    res.status(200).json(juegoEditado);
  } catch (error) {
    res.status(400).json({ message: 'Error al editar el juego: ' + error.message });
  }
});

// DELETE /api/juegos/:id - Eliminar un juego [cite: 53]
router.delete('/:id', async (req, res) => {
  try {
    const resultado = await Juego.findByIdAndDelete(req.params.id);

    if (!resultado) {
      return res.status(404).json({ message: 'Juego no encontrado para eliminar.' });
    }
    res.status(200).json({ message: 'Juego eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el juego: ' + error.message });
  }
});


module.exports = router;