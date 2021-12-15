import React from 'react'
import {
  QuestionBox,
  H2,
  AnswersBox,
  AnswerButton,
  ContinueButton
} from './styles'

const Quiz = ({question, answers, handleOptionClick, handleNextQuestion}) => {
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
              $selected={answer.selected}
            >
              {answer.text}
            </AnswerButton>
          )
        })}
      </AnswersBox>

      {question.multiselect && (
        <ContinueButton type="submit" onClick={() => handleNextQuestion()}>
          Continue
        </ContinueButton>
      )}
    </>
  )
}

export default Quiz
