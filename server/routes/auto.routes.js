const express = require('express');
const router = express.Router();

const auto = require('../controllers/auto.controller');

router.get('/', auto.getAutos);   //obtener datos
router.post('/', auto.createAuto); //guardar datos
router.get('/:id', auto.getAuto);
router.put('/:id', auto.editAuto);    //editar datos
router.delete('/:id', auto.deleteAuto); 

module.exports = router;