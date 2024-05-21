// routes/propietariosRoutes.js
const express = require('express');
const router = express.Router();
const { mostrar } = require('../controllers/propietariosControllers');

router.get('/mostrarpropietarios', mostrar);

module.exports = router;
