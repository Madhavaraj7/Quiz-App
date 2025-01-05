import { getQuizQuestions } from '../infrastructure/quizRepository';

export const fetchQuizQuestions = async () => {
  return await getQuizQuestions();
};
