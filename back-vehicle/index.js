const express = require('express');
const connectDB = require('./config/db');
const propietariosRoutes = require('./routes/propietariosRoutes');

const app = express();
const port = 3001;

connectDB();

app.use(express.json());

app.use('/propietarios', propietariosRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
