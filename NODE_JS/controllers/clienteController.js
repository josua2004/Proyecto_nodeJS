const { Cliente } = require('../models');

module.exports = {
  async obtenerClientes(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async crearCliente(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async actualizarCliente(req, res) {
    try {
      const { id } = req.params;
      await Cliente.update(req.body, { where: { id } });
      res.send('Cliente actualizado correctamente');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async eliminarCliente(req, res) {
    try {
      const { id } = req.params;
      await Cliente.destroy({ where: { id } });
      res.send('Cliente eliminado correctamente');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
