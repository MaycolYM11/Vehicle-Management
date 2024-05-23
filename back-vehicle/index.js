const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const connectDB = require('./config/db');
const propietariosRoutes = require('./routes/propietariosRoutes');

const app = express();
const port = 3001;

connectDB();

app.use(cors()); // Añade el middleware de CORS

app.use(express.json());

app.use('/propietarios', propietariosRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
