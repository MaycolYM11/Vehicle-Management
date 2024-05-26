
const mongoose = require('mongoose');

const vehiculoSchema = mongoose.Schema({
    año: Number,
    modelo: String,
    color: String,
    matricula: String
});

const propietariosSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    documento: Number,
    telefono: Number,
    direccion: String,
    vehiculos: [vehiculoSchema]
});

const PropietariosModel = mongoose.model('vehiculos', propietariosSchema);

module.exports = PropietariosModel;

// module.exports = {
//     PropietariosModel,
//     vehiculoSchema
// }

