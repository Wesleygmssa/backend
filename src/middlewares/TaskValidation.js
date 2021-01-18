const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress) {
        return res.status(400).json({ error: 'macaddress é obrigatório' });
    } else if (!type) {
        return res.status(400).json({ error: 'tipo é obrigatório' });
    } else if (!title) {
        return res.status(400).json({ error: 'title é obrigatório' });
    } else if (!description) {
        return res.status(400).json({ error: 'description é obrigatório' });
    } else if (!when) {
        return res.status(400).json({ error: 'data e hora  é obrigatório' });

    } else {
        let existis;
        const { id } = req.params;
        if (id) {
            existis = await TaskModel.
                findOne(
                    {
                        '_id': { '$ne': id },
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    });
        } else {
            if (isPast(new Date(when))) {
                return res.status(400).json({ error: 'Escolha uma data e hora futura' });
            }
            existis = await TaskModel
                .findOne({
                    'when': { '$eq': new Date(when) },
                    'macaddress': { '$in': macaddress }
                });
        }
        if (existis) {
            return res.status(400).json({ error: 'Já existe uma tarefa nesse dia e horario' });
        }


        next();
    }

}

module.exports = TaskValidation;