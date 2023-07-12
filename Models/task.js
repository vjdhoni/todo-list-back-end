const mongoose = require('mongoose')

var data = {
    task: { type: String, required: true, trim: true },
    priority: { type: String, required: true, enum: ['High', 'Medium', 'Low'], default: 'Low' },
    status: { type: String, required: true, trim: true, default: 'To Do' }
};

var taskSchema = mongoose.Schema(data, { timestamps: true });

module.exports = mongoose.model("task", taskSchema)