const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const productosRoutes = require('./routes/productosRoutes'); // Importa las rutas de productos
const clientesRoutes = require('./routes/clientesRoutes')
const ventasRoutes = require('./routes/ventasRoutes')

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas de productos
app.use('/productos', productosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/ventas', ventasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});