const { Productos } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Productos.findAll(); // Cambia Producto a Productos
    res.status(200).json(productos);
  } catch (error) {
    console.error(error); // Imprimir error para depuración
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};

module.exports = {
    obtenerProductos
  
  };