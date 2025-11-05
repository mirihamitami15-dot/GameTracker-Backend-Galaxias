// models/Reseña.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  juegoId: { // Relación con el juego
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego', 
    required: true
  },
  puntuacion: { // Puntuación con estrellas [cite: 59]
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  texto: { // Reseñas detalladas [cite: 60]
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reseña', reviewSchema);