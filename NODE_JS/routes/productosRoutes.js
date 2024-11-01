
    const express = require('express');
    const router = express.Router();
    const productosController = require('../controllers/productosController'); // Importar el controlador
    

    // Definir las rutas
    router.get('/', productosController.obtenerProductos); // Obtener todos los productos



    module.exports = router;
