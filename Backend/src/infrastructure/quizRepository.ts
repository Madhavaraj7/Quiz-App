import mongoose, { Schema } from 'mongoose';
import { QuizQuestion } from '../domain/quiz';

const QuizSchema = new Schema<QuizQuestion>({
  id: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  explanation: { type: String, required: true },
});

const QuizModel = mongoose.model<QuizQuestion>('Quiz', QuizSchema);

export const getQuizQuestions = async (): Promise<QuizQuestion[]> => {
  return QuizModel.find({});
};
