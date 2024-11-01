    const express = require('express');
    const router = express.Router();
    const ventaController = require('../controllers/ventaController');

      // Rutas para Ventas
      router.get('/ventas', ventaController.obtenerVentas);
      router.post('/ventas', ventaController.crearVenta);
      router.put('/ventas/:id', ventaController.actualizarVenta);
      router.delete('/ventas/:id', ventaController.eliminarVenta);


      module.exports = router;