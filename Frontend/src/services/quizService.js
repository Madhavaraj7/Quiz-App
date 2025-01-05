export const getQuizQuestions = async () => {
    const response = await fetch('http://localhost:5000/api/quiz');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }
    return await response.json();
  };
  