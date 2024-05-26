const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const connectDB = require('./config/db');
const propietariosRoutes = require('./routes/propietariosRoutes');

const app = express();
const port = 3001;

connectDB();

const optionsCors = {
    origin: `http://localhost:3000`,
    methods: 'GET, POST, PUT, DELETE',
    optionsSuccessStatus: 200,  
};
app.use(cors(optionsCors));

app.use(express.json());

app.use('/propietarios', propietariosRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
