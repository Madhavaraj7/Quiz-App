import express from 'express';
import { getQuiz } from '../controllers/quizController';

const router = express.Router();

router.get('/quiz', getQuiz);

export default router;
