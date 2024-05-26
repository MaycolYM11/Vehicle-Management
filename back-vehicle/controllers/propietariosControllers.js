// controllers/propietariosController.js
const PropietariosModel = require('../models/propietarios');
const vehiculoSchema =  require('../models/propietarios')

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

const crear = async (req, res) => {
    const { nombre, apellido, documento, telefono, direccion, vehiculos } = req.body;

    try {
        const vehiculosArray = Array.isArray(vehiculos) ? vehiculos : [vehiculos];

        const propietario = new PropietariosModel({
            nombre:nombre,
            apellido:apellido,
            documento:documento,
            telefono:telefono,
            direccion:direccion,
            vehiculos: vehiculosArray
        });

        const resultado = await propietario.save();
        res.json({resultado,pass:true});
        console.log(resultado);
    } catch (error) {
        res.status(500).json({ message: error.message , pass:false});
        console.error(error);
    }
};

const eliminarPropietario = async (req, res) => {
    try {
      const { documento } = req.params;
  
      const resultado = await PropietariosModel.deleteOne({ documento: documento });
  
      if (resultado.deletedCount === 0) {
        return res.status(404).json({ message: 'Propietario no encontrado' });
      }
  
      res.json({ message: 'Propietario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.error(error);
    }
  };

module.exports = {
    mostrar,
    crear,
    eliminarPropietario
};
