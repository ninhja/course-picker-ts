import React from 'react'
import {AnswersBox, AnswerButton} from './styles'

import {H2, CTAButton} from '../../styles'

const Quiz = ({
  question,
  answers,
  answerIds,
  handleAnswerClick,
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
              onClick={() => handleAnswerClick(answer)}
              $selected={answerIds.includes(answer.id)}
            >
              {answer.text}
            </AnswerButton>
          )
        })}
      </AnswersBox>

      {question.multiselect && (
        <CTAButton type="submit" onClick={() => goToNextQuestion()}>
          Continue
        </CTAButton>
      )}
    </>
  )
}

export default Quiz
