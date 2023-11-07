// task.model.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  completionStatus: {
    type: String,
    enum: ['Completed', 'In Progress', 'Not Started'],
    default: 'Not Started'
  },
  dueDate: {
    type: Date
  },
  details: {
    type: String
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
