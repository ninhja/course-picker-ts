import React, {useState} from 'react'
import {GlobalStyle, Header, NavButton, H1, Main, QuizBox} from './styles'
import Quiz from './components/Quiz'
import Result from './components/Result'
import WelcomePage from './components/WelcomePage'
import {Answer, QUESTIONS} from './questions'

const STARTING_QUESTION_ID = 'q1'

type QuestionData = {
  id: string
  text: string
  multiselect: boolean
  answerIds: string[]
}
type QuestionsData = Record<string, QuestionData>
type AnswerData = Answer & {id: string; selected: false}
type AnswersData = Record<string, AnswerData>

// this reformats the questions into two different objects,
// questionsData and answersData, in a way that is easier to work with
const formatDataObject = (): {
  questionsData: QuestionsData
  answersData: AnswersData
} =>
  QUESTIONS.reduce((data, currentQuestion) => {
    const {id, answers, ...restOfCurrentQuestion} = currentQuestion
    const answerDataObject = answers
      .map((answer, index) => ({
        id: id + '-a' + (index + 1),
        ...answer,
        selected: false
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
      questionsData: {
        ...data.questionsData,
        [id]: {
          id: id,
          ...restOfCurrentQuestion,
          answerIds: answerIds
        }
      },
      answersData: {
        ...data.answersData,
        ...answerDataObject
      }
    }
  }, {} as {questionsData; answersData})

const {questionsData, answersData} = formatDataObject()

export default function App() {
  const [startedQuiz, setStartedQuiz] = useState<boolean>(false)
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    STARTING_QUESTION_ID
  )
  const [questionIds, setQuestionIds] = useState<string[]>([
    STARTING_QUESTION_ID
  ])
  const [answerIds, setAnswerIds] = useState<string[]>([])

  const startQuiz = () => {
    setStartedQuiz(true)
  }

  const restartQuiz = () => {
    setCurrentQuestionId(STARTING_QUESTION_ID)
    setQuestionIds([STARTING_QUESTION_ID])
    setAnswerIds([])
  }

  const getCurrentQuestionIdIndex = () => questionIds.indexOf(currentQuestionId)

  const insertNextQuestionId = (questionId: string) => {
    setQuestionIds((questionIds) =>
      questionIds
        .slice(0, getCurrentQuestionIdIndex() + 1)
        .concat(
          [questionId],
          questionIds.slice(getCurrentQuestionIdIndex() + 1)
        )
    )
  }

  const removeQuestionId = (questionId) => {
    setQuestionIds((questionIds) =>
      questionIds.filter((id) => id !== questionId)
    )
  }

  // for each answer with the questionId, remove it from answerIds
  const removeAnswerIds = (questionId) => {
    setAnswerIds((answerIds) =>
      answerIds.filter((answerId) => !answerId.includes(questionId))
    )
  }

  const goToQuestion = (questionId) => {
    setCurrentQuestionId(questionId)
  }

  const goToPrevQuestion = () => {
    // if at the first quiz question, go to quiz homepage
    if (currentQuestionId === STARTING_QUESTION_ID) {
      setStartedQuiz(false)
    } else {
      const prevQuestionId = currentQuestionId
        ? questionIds[getCurrentQuestionIdIndex() - 1]
        : questionIds[questionIds.length - 1]

      removeAnswerIds(prevQuestionId)
      goToQuestion(prevQuestionId)
      removeQuestionId(currentQuestionId)
    }
  }

  const goToNextQuestion = () => {
    const nextQuestionId = questionIds[getCurrentQuestionIdIndex() + 1]
    goToQuestion(nextQuestionId)
  }

  const deselectAnswer = (answer) => {
    setAnswerIds((answerIds) => answerIds.filter((id) => id !== answer.id))
    removeQuestionId(answer.nextQuestionId)
  }

  const selectAnswer = (answer) => {
    setAnswerIds((answerIds) => answerIds.concat(answer.id))
    if (answer.nextQuestionId) insertNextQuestionId(answer.nextQuestionId)
  }

  const updateAnswerSelected = (answer) => {
    const isAnswerSelected = answerIds.indexOf(answer.id) !== -1
    if (isAnswerSelected) {
      deselectAnswer(answer)
    } else {
      selectAnswer(answer)
    }
  }
  const handleAnswerClick = (answer) => {
    updateAnswerSelected(answer)
    if (!questionsData[currentQuestionId].multiselect) {
      if (answer.nextQuestionId) {
        goToQuestion(answer.nextQuestionId)
      } else {
        goToNextQuestion()
      }
    }
  }

  const getUserSelectedTags = () =>
    answerIds.reduce(
      (userSelectedTags, answerId) => [
        ...userSelectedTags,
        ...answersData[answerId].tags
      ],
      []
    )
  console.log(' ')
  // console.log('currentQuestionId: ' + currentQuestionId)
  // console.log('questionIds: ' + questionIds)
  // console.log('answerIds: ' + answerIds)
  // console.log('userSelectedTags: ' + getUserSelectedTags())

  // console.log(questionsData)
  // console.log(answersData)

  return (
    <>
      <GlobalStyle />

      <Header>
        <NavButton onClick={goToPrevQuestion}>Back</NavButton>
        <H1>Course Picker</H1>
        <NavButton onClick={restartQuiz}>Restart</NavButton>
      </Header>
      <Main $quizInProgress={!currentQuestionId || !startedQuiz}>
        <QuizBox>
          {!startedQuiz ? (
            <WelcomePage startQuiz={startQuiz} />
          ) : currentQuestionId ? (
            <Quiz
              question={questionsData[currentQuestionId]}
              answers={questionsData[currentQuestionId].answerIds.map(
                (answerId) => answersData[answerId]
              )}
              answerIds={answerIds}
              handleAnswerClick={handleAnswerClick}
              goToNextQuestion={goToNextQuestion}
            />
          ) : (
            <Result userSelectedTags={getUserSelectedTags()} />
          )}
        </QuizBox>
      </Main>
    </>
  )
}
