const express = require('express');
const router = express.Router();

const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

//rotas principais
router.post('/task', TaskValidation, TaskController.create);
router.put('/task/:id', TaskValidation, TaskController.update);
router.get('/task/:id', TaskController.show); //mostrar uma unica tarefagi
router.delete('/task/:id', TaskController.delete);
router.put('/task/:id/:done', TaskController.done); // tarefa concluida ou não concluida true ou false

//rotas de filtro
router.get('/task/filter/all/:macaddress', TaskController.all); // todas as tarefas
router.get('/task/filter/late/:macaddress', TaskController.late);
router.get('/task/filter/today/:macaddress', TaskController.today);
router.get('/task/filter/week/:macaddress', TaskController.week);
router.get('/task/filter/month/:macaddress', TaskController.month);
router.get('/task/filter/year/:macaddress', TaskController.year);

module.exports = router;