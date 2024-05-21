// controllers/propietariosController.js
const PropietariosModel = require('../models/propietarios');

const mostrar = async (req, res) => {
    try {
        const result = await PropietariosModel.find();
        console.log(result);
        res.json(result);    
    } catch (error) {
        console.log(`Error en la muestra: ${error}`);
        res.json({ message: `Error en la muestra: ${error}` });
    }
};

module.exports = {
    mostrar
};
