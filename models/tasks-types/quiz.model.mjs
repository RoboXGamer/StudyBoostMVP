// quiz.model.js
import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
