const Task = require('../Models/task');

const getTasks = async (req, res) => {
    try {
        const resultPerPage = req.query.count || 30;
        await Task.find({})
            .sort({ updatedAt: -1 })
            .then(async (ref) => {
                res.status(200).json(ref)
                // const totalResult = ref.length
                // if (totalResult > 0) {
                //     // const numberOfPage = Math.ceil(numberOfResult / resultPerPage);
                //     // let page = req.query.page ? Number(req.query.page) : 1;
                //     // if (page > numberOfPage) page = numberOfPage
                //     // else if (page < 1) page = 1
                //     // const startingLimit = (page - 1) * resultPerPage;
                //     await Task.find({})
                //         // .sort({ updatedAt: -1 })
                //         // .limit(resultPerPage)
                //         // .skip(startingLimit)
                //         .then(ret => res.status(200).json({
                //             cout: ref.length,
                //             totalCount: numberOfResult,
                //             totalPages: numberOfPage,
                //             page,
                //             firstItemIndex: startingLimit,
                //             lastItemIndex: startingLimit + (ref.length - 1),
                //             data: ret
                //         }))
                // } else {
                //     res.status(200).json({
                //         cout: ref.length,
                //         totalCount: numberOfResult,
                //         totalPages: numberOfPage,
                //         page,
                //         firstItemIndex: startingLimit,
                //         lastItemIndex: startingLimit + (ref.length - 1),
                //         data: ref
                //     })
                // }
            })
            .catch(err => res.status(400).json({ message: err }))
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const postTask = async (req, res) => {
    try {
        await Task(req.body).save()
            .then(ref => res.status(201).json(ref))
            .catch(err => res.status(400).json({ message: err }))
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getTask = async (req, res) => {
    try {
        await Task.findById(req.params.id)
            .then(ref => res.status(200).json(ref))
            .catch(err => res.status(400).json({ message: err }))
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, upsert: true, setDefaultsOnInsert: true })
            .then(ref => res.status(200).json(ref))
            .catch(err => res.status(400).json({ message: err }))
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.id)
            .then(ref => res.status(200).json(ref))
            .catch(err => res.status(400).json({ message: err }))
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


module.exports = { getTasks, postTask, getTask, updateTask, deleteTask }