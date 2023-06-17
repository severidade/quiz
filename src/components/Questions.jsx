import React, { useEffect, useState } from 'react';
import client from '../cliente';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await client.fetch('*[_type == "question"]');
        setQuestions(response);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (selectedOption !== '') {
      const isCorrect = selectedOption === questions[currentQuestionIndex].correctOption.toString();
      setIsAnswerCorrect(isCorrect);
      setSelectedOption('');
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2>{questions[currentQuestionIndex].title}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    checked={selectedOption === index.toString()}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {isAnswerCorrect !== null && (
            <div>{isAnswerCorrect ? 'Correct answer!' : 'Incorrect answer!'}</div>
          )}
          <button onClick={handleNextQuestion} disabled={selectedOption === ''}>
            Next Question
          </button>
        </div>
      ) : (
        <div>Loading questions...</div>
      )}
    </div>
  );
};

export default Questions;
