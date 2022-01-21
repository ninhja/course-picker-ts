import React from 'react'
import {AnswersBox, AnswerButton, ContinueButton} from './styles'

import {H2, P} from '../../styles'

const Quiz = ({
  question,
  answers,
  answerIds,
  handleOptionClick,
  goToNextQuestion
}) => {
  return (
    <>
      <H2>{question.text}</H2>

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
