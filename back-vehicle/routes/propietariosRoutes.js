// routes/propietariosRoutes.js
const express = require('express');
const router = express.Router();
const { mostrar, crear } = require('../controllers/propietariosControllers');

router.get('/mostrarpropietarios', mostrar);

router.post('/crearpropietario', crear)

module.exports = router;
