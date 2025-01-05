
export const URL=import.meta.env.VITE_URL



export const getQuizQuestions = async () => {
    const response = await fetch(URL+'/api/quiz');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }
    return await response.json();
  };
  