const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacanteController = require('../controllers/vacanteController');

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos);
    // crear vacantes
    router.get('/vacantes/nueva', vacanteController.formularioNuevaVacante);
    return router;
}