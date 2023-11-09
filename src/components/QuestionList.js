import React from 'react';

function QuestionList({ questions, deleteQuestion, updateCorrectAnswer }) {
  return (
    <div>
      <h1>Question List</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.prompt}
            <button onClick={() => deleteQuestion(question.id)}>Delete</button>
            <select
              value={question.correctIndex}
              onChange={(e) => updateCorrectAnswer(question.id, parseInt(e.target.value))}
            >
              {question.answers.map((answer, index) => (
                <option key={index} value={index}>
                  {answer}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
