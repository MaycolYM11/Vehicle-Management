// routes/propietariosRoutes.js
const express = require('express');
const router = express.Router();
const { mostrar, crear, eliminarPropietario } = require('../controllers/propietariosControllers');

router.get('/mostrarpropietarios', mostrar);
router.post('/crearpropietario', crear);
router.delete('/eliminar/:documento', eliminarPropietario);

module.exports = router;
