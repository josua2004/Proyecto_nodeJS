const { Venta } = require('../models');

module.exports = {
  async obtenerVentas(req, res) {
    try {
      const ventas = await Venta.findAll();
      res.json(ventas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async crearVenta(req, res) {
    try {
      const venta = await Venta.create(req.body);
      res.status(201).json(venta);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async actualizarVenta(req, res) {
    try {
      const { id } = req.params;
      await Venta.update(req.body, { where: { id } });
      res.send('Venta actualizada correctamente');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async eliminarVenta(req, res) {
    try {
      const { id } = req.params;
      await Venta.destroy({ where: { id } });
      res.send('Venta eliminada correctamente');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};
