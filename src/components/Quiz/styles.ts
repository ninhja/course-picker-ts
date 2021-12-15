import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles'

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
`

export const AnswersBox = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
`

export const AnswerButton = styled(PillButton)`
  background: white;
  border: 2px solid white;
  border: 2px solid ${({$selected}) => ($selected ? COLORS.border : 'white')};

  :hover {
    border: 2px solid ${COLORS.border};
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
