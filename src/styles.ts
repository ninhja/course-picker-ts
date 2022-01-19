import styled, {createGlobalStyle} from 'styled-components'
import GTAmericaWoff from './assets/fonts/GT-America-Regular.woff'
import PxGroteskWoff from './assets/fonts/PxGrotesk-Regular.woff'

export const COLORS = {
  text: 'black',
  background: 'thistle',
  border: 'black'
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GT America';
    font-style: normal;
    font-weight: 400;
    src: url(${GTAmericaWoff});
  }

  @font-face {
    font-family: 'Px Grotesk';
    font-style: normal;
    font-weight: 400;
    src: url(${PxGroteskWoff});
  }

  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: ${COLORS.background};
    font-family: 'GT America', sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }
`

export const Button = styled.button`
  background: none;
  font-size: 18px;
  padding: 12px 20px;
  cursor: pointer;
`

export const PillButton = styled(Button)`
  min-width: 12rem;
  height: 4rem;
  border: 2px solid ${COLORS.border};
  border-radius: 2rem;
  transition: 0.13s ease;
`

export const Header = styled.header`
  background: lightpink;
  border-bottom: 2px solid black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  text-align: center;
  padding: 20px;
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavButton = styled(Button)`
  border: none;
  font-size: 16px;
`

export const H1 = styled.h1`
  font-family: 'Px Grotesk';
  font-size: 18px;
`

export const H2 = styled.h2`
  font-family: 'Px Grotesk';
  font-size: 36px;
`

export const H3 = styled.h3`
  font-family: 'Px Grotesk';
  font-size: 24px;
`

export const H4 = styled.h4`
  font-family: 'Px Grotesk';
  font-size: 20px;
`

export const P = styled.p`
  font-size: 16px;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 12px;
`
export const Main = styled.main`
  position: absolute;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const QuizBox = styled.section`
  width: 90vw;
  max-width: 900px;
  height: 100%;
  padding: 128px 36px;

  @media (max-width: 680px) {
    width: 100%;
  }
`
