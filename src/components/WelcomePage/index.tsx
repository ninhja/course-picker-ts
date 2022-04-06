import React from 'react'

import {H2, P, A, CTAButton} from '../../styles'

const WelcomePage = ({startQuiz}) => (
  <>
    <H2>Welcome!</H2>
    <P>
      Here at SuperHi, we want to help you create projects you're proud of,
      upgrade your skills and boost your career. This quiz will help you figure
      out what courses you should take to achieve your goals. Let's go!
    </P>
    <CTAButton onClick={startQuiz}>Take the quiz</CTAButton>
    <A href="https://www.superhi.com/courses">Browse all courses</A>
  </>
)

export default WelcomePage
