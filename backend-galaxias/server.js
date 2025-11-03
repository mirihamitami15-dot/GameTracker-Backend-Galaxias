// SERVER.JS - GameTracker Backend Galaxias

// 1. Importar Express
const express = require('express');

// 2. Inicializar la app
const app = express();

// 3. Middleware para el manejo de JSON
app.use(express.json());

// 4. Ruta de prueba (Mundo Galáctico)
app.get('/', (req, res) => {
  res.send('🌌 Servidor GameTracker iniciado en la galaxia. 🚀');
});

// 5. Definir el puerto (usaremos 4000)
const PORT = 4000;

// 6. Encender el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});