import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles'

export const AnswersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 0px;
`

export const AnswerButton = styled(PillButton)`
  background: ${COLORS.white};
  border: 2px solid white;
  border: 2px solid ${({$selected}) => ($selected ? COLORS.border : 'white')};
  color: ${COLORS.black};

  :hover {
    background: ${COLORS.white};
    border: 2px solid ${COLORS.black};
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
