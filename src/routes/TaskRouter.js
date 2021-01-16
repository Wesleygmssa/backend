const express = require('express');
const router = express.Router();

const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');
const MacaddressValidation = require('../middlewares/MacaddressValidation');


router.post('/task', TaskValidation, TaskController.create);
router.put('/task/:id', TaskValidation, TaskController.update);
router.get('/task/:id', TaskController.show); //mostrar uma unica tarefagi
router.delete('/task/:id', TaskController.delete);
router.put('/task/:id/:done', TaskController.done); // tarefa concluida ou não concluida

router.get('/task/filter/all', MacaddressValidation, TaskController.all); // todas as tarefas
router.get('/task/filter/late', MacaddressValidation, TaskController.late); // Tarefas atrazdas

module.exports = router;