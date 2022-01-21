import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles'

export const StartButton = styled(PillButton)`
  color: ${COLORS.white};
  background: ${COLORS.darkBlue};
  border: none;
  margin-bottom: 16px;

  :hover {
    background: ${COLORS.extraDarkBlue};
  }
`
