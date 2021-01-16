const express = require('express');
const router = express.Router();

const TaskValidation = require('../middlewares/TaskValidation');
const TaskController = require('../controller/TaskController');

router.post('/task', TaskValidation, TaskController.create);
router.put('/task/:id', TaskValidation, TaskController.update);

module.exports = router;