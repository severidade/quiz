import React, { useEffect, useState } from 'react';
import client from '../../cliente';

export default function Questions() {
  const [questions, setQuestions] = useState([]);

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

  console.log(questions)

 if (questions.length === 0) return <div className='loading'>Loading...</div>;
  
  return(
   <>
    <p>codigo</p>
   </>
  )
}