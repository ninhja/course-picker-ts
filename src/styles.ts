import styled, {createGlobalStyle} from 'styled-components'
import GTAmericaWoff from './assets/fonts/GT-America-Regular.woff'
import PxGroteskWoff from './assets/fonts/PxGrotesk-Regular.woff'
// import YellowBackground from './assets/images/background-yellow.jpeg'
// import BlueBackground from './assets/images/background-blue.png'

export const COLORS = {
  white: '#FFFFFF',
  black: '#111118',
  lightBlue: '#CDF1FE',
  darkBlue: '#2727e6',
  extraDarkBlue: '#121297'
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
    background-color: ${COLORS.lightBlue};
    font-family: 'GT America', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    line-height: 1.6;
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
  border-radius: 2rem;
  transition: 0.2s ease;
`

export const Header = styled.header`
  background: white;
  border-bottom: 1px solid grey;
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
  color: ${COLORS.darkBlue};
  padding-bottom: 16px;
`

export const H3 = styled.h3`
  font-family: 'Px Grotesk';
  font-size: 24px;
`

export const H4 = styled.h4`
  font-family: 'Px Grotesk';
  font-size: 18px;
`

export const P = styled.p`
  font-size: 16px;
  padding-bottom: 40px;
  max-width: 520px;
`

export const A = styled.a`
  font-size: 16px;
  color: ${COLORS.black};
  padding-bottom: 2px;
  border-bottom: 2px solid ${COLORS.black};
  text-decoration: none;
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
  
  /* background-image: url(${({$quizInProgress}) =>
    $quizInProgress ? 'none' : 'none'});
  background-attachment: center;
  background-size: cover; */
`

export const QuizBox = styled.section`
  width: 90vw;
  max-width: 900px;
  height: 100%;
  padding: 128px 36px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 680px) {
    width: 100%;
  }
`
