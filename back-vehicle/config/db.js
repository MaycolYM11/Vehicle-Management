
const mongoose = require('mongoose');

const url = 'mongodb://localhost/Parqueadero';

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error en conexión:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
