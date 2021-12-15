import React from 'react'
import {
  QuestionBox,
  H2,
  AnswersBox,
  AnswerButton,
  ContinueButton
} from './styles'

const Quiz = ({
  question,
  answers,
  answerIds,
  handleOptionClick,
  goToNextQuestion
}) => {
  return (
    <>
      <QuestionBox>
        <H2>{question.text}</H2>
      </QuestionBox>

      <AnswersBox>
        {answers.map((answer, index) => {
          return (
            <AnswerButton
              key={index}
              onClick={() => handleOptionClick(answer)}
              $selected={answerIds.includes(answer.id)}
            >
              {answer.text}
            </AnswerButton>
          )
        })}
      </AnswersBox>

      {question.multiselect && (
        <ContinueButton type="submit" onClick={() => goToNextQuestion()}>
          Continue
        </ContinueButton>
      )}
    </>
  )
}

export default Quiz
