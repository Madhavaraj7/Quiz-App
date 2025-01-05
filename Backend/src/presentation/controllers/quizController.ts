import { Request, Response } from 'express';
import { fetchQuizQuestions } from '../../application/quizService';

export const getQuiz = async (_req: Request, res: Response) => {
  try {
    const questions = await fetchQuizQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quiz questions' });
  }
};
