// subject.model.js
import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }]
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;
