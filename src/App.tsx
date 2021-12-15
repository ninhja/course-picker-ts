import React, {useState, useEffect} from 'react'
import {GlobalStyle, Header, NavButton, H1, QuizBox} from './styles'
import Quiz from './components/Quiz'
import Result from './components/Result'
import {QUESTIONS} from './questions'
import {Tag} from './types'

const STARTING_QUESTION_ID = 'q1'

const formatDataObject = () =>
  QUESTIONS.reduce((data, currentQuestion) => {
    const {id, answers, ...restOfCurrentQuestion} = currentQuestion
    const answerDataObject = answers
      .map((answer, index) => ({
        id: id + '-a' + (index + 1),
        ...answer
      }))
      .reduce(
        (answerData, currentAnswer) => ({
          ...answerData,
          [currentAnswer.id]: currentAnswer
        }),
        {}
      )
    const answerIds = Object.keys(answerDataObject)

    return {
      questions: {
        ...data.questions,
        [id]: {
          id: id,
          ...restOfCurrentQuestion,
          answerIds: answerIds
        }
      },
      answers: {
        ...data.answers,
        ...answerDataObject
      }
    }
  }, {})
console.log(formatDataObject())

// const getBlankAnswersData = () =>
//   QUESTIONS.reduce(
//     (answersData, currentQuestion) => ({
//       ...answersData,
//       [currentQuestion.id]: currentQuestion.answers.map((answer, index) => ({
//         ...answer,
//         selected: false
//       }))
//     }),
//     {}
//   )

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    STARTING_QUESTION_ID
  )
  const [questionIds, setQuestionIds] = useState<string[]>([
    STARTING_QUESTION_ID
  ])
  // const [previousQuestionIds, setPreviousQuestionIds] = useState<string[]>([])

  // const [questionsData, setQuestionsData] = useState<Object>(
  // getBlankQuestionsData()
  // )
  // const [answersData, setAnswersData] = useState<Object>(getBlankAnswersData())
  const [userSelectedTags, setUserSelectedTags] = useState<Tag[]>([])

  // useEffect(() => {
  //   if (questionIds.length > 0) {
  //     setCurrentQuestionId(questionIds[0])
  //   }
  // }, [questionIds])

  const handleRestartClick = () => {
    setUserSelectedTags([])
    // setQuestionsData(getBlankQuestionsData())
    // setAnswersData(getBlankAnswersData())
    // setPreviousQuestionIds([])
    setCurrentQuestionId(STARTING_QUESTION_ID)
    setQuestionIds([STARTING_QUESTION_ID])
  }

  const addQuestionId = (questionId: string) => {
    setQuestionIds((questionIds) => [...questionIds, questionId])
  }

  const addUserSelectedTags = (newTags) => {
    setUserSelectedTags((userSelectedTags) => [...userSelectedTags, ...newTags])
  }

  const removeCurrentQuestionId = () => {
    // setPreviousQuestionIds((previousQuestionIds) => [
    //   questionIds[0],
    //   ...previousQuestionIds
    // ])
    setQuestionIds((questionIds) => questionIds.slice(1))
  }

  const handleNextQuestion = () => {
    removeCurrentQuestionId()
  }

  const addNextQuestion = (answer) => {
    addUserSelectedTags(answer.tags)
    addQuestionId(answer.nextQuestionId)
  }

  const goToQuestion = (questionId) => {
    setCurrentQuestionId(questionId)
  }

  const setAnswerSelected = (answerId) => {
    // setAnswersData(answers => ({
    //   ...answers,
    //   [answerId]: {
    //     ...answers[answerId],
    //     selected:
    //   }
    // }))
  }

  const handleOptionClick = (answer) => {
    // addNextQuestion(answer)
    // setAnswerSelected(answer.id)
    // if (!questionsData[currentQuestionId].multiselect) {
    //   goToQuestion(answer.nextQuestionId)
    // }
  }

  // const goToPrevQuestion = () => {
  //   const currentQuestionIdIndex = questionIds.indexOf(currentQuestionId)
  //   setCurrentQuestionId(questionIds[currentQuestionIdIndex - 1])
  // }

  const goToNextQuestion = () => {}

  // questions object
  // answers object
  /* 
  {
    'q1-a1': {
      id: 'q1-1,
      ...rest of the answer
    }
    'q1-a2': {

    }
  }
  */

  // STATE
  // currentQuestionId - string
  // questionIds - string[]
  // answerIds - string[]

  // clicks an answer on a question
  //

  return (
    <>
      <GlobalStyle />

      <Header>
        <NavButton>Back</NavButton>
        <H1>Course Picker</H1>
        <NavButton onClick={handleRestartClick}>Restart</NavButton>
      </Header>

      {/* <QuizBox>
        {currentQuestionId ? (
          <Quiz
            question={questionsData[currentQuestionId]}
            answers={answersData[currentQuestionId]}
            handleOptionClick={handleOptionClick}
            handleNextQuestion={handleNextQuestion}
          />
        ) : (
          <Result userSelectedTags={userSelectedTags} />
        )}
      </QuizBox> */}
    </>
  )
}
