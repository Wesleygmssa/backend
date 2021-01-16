const { create } = require('../model/TaskModel');
const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(201).json(response)
            }) // ok
            .catch(error => {
                return res.status(500).json(error);
            }) // erro
    }

    async update(req, res) {
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response); //ok
            }).catch(error => {
                return res.status(500).json(error); // error
            });
    }
}


module.exports = new TaskController();