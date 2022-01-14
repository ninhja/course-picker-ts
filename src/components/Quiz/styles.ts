import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles'

export const QuizBox = styled.div`
  text-align: center;
`

export const AnswersBox = styled.div`
  padding: 24px 0px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const AnswerButton = styled(PillButton)`
  background: white;
  border: 2px solid white;
  border: 2px solid ${({$selected}) => ($selected ? COLORS.border : 'white')};

  :hover {
    border: 2px solid ${COLORS.border};
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`

export const ContinueButton = styled(PillButton)`
  background-color: ${COLORS.text};
  color: ${COLORS.background};
  border: none;
  :hover {
    background-color: white;
    color: ${COLORS.text};
  }
`
