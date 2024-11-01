const express = require('express');
    const router = express.Router();
    const clienteController = require('../controllers/clienteController');

    // Definir las rutas
    // Rutas para Clientes
    router.get('/clientes', clienteController.obtenerClientes);
    router.post('/clientes', clienteController.crearCliente);
    router.put('/clientes/:id', clienteController.actualizarCliente);
    router.delete('/clientes/:id', clienteController.eliminarCliente);


    module.exports = router;

