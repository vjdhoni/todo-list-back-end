const express = require('express')
const router = express.Router()
const taskController = require('../Controllers/task.controllers')

router.get('/',taskController.getTasks);
router.post('/',taskController.postTask);
router.get('/:id',taskController.getTask);
router.patch('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);

module.exports = router