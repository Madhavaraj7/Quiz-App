import mongoose from 'mongoose';
import { QuizQuestion } from './domain/quiz';
import { connectDB } from './infrastructure/database';

const seedData: QuizQuestion[] = [
  {
    id: "1",
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    correctAnswer: "Library",
    explanation: "React is a library for building UIs.",
  },
  {
    id: "2",
    question: "What is Node.js?",
    options: ["Runtime", "Framework", "Library", "Database"],
    correctAnswer: "Runtime",
    explanation: "Node.js is a runtime environment for JavaScript.",
  },
  {
    id: "3",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
    explanation: "Paris is the capital city of France.",
  },
  {
    id: "4",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    explanation: "Mars is called the Red Planet due to its reddish appearance.",
  },
  {
    id: "5",
    question: "What is the square root of 16?",
    options: ["2", "4", "8", "16"],
    correctAnswer: "4",
    explanation: "The square root of 16 is 4.",
  },
  {
    id: "6",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    explanation: "William Shakespeare wrote 'Romeo and Juliet.'",
  },
  {
    id: "7",
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
    explanation: "Water boils at 100°C at sea level.",
  },
  {
    id: "8",
    question: "Which programming language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    correctAnswer: "HTML",
    explanation: "HTML is used for structuring content on the web.",
  },
  {
    id: "9",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation: "2 + 2 equals 4.",
  },
  {
    id: "10",
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Lemon"],
    correctAnswer: "Avocado",
    explanation: "Avocado is the main ingredient in guacamole.",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    const QuizModel = mongoose.model<QuizQuestion>('Quiz', new mongoose.Schema<QuizQuestion>({
      id: { type: String, required: true },
      question: { type: String, required: true },
      options: { type: [String], required: true },
      correctAnswer: { type: String, required: true },
      explanation: { type: String, required: true },
    }));
    await QuizModel.insertMany(seedData);
    console.log('Data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();
