import React, {useState} from 'react'
import {GlobalStyle, Header, NavButton, H1, Main, QuizBox} from './styles'
import Quiz from './components/Quiz'
import Result from './components/Result'
import {QUESTIONS} from './questions'

const STARTING_QUESTION_ID = 'q1'

const formatDataObject = () =>
  QUESTIONS.reduce(
    (data, currentQuestion) => {
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
    },
    {questionsData: {}, answersData: {}}
  )

const {questionsData, answersData} = formatDataObject()

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    STARTING_QUESTION_ID
  )
  const [questionIds, setQuestionIds] = useState<string[]>([
    STARTING_QUESTION_ID
  ])
  // what if we reformat answerIds so that rather than a flat array,
  // we have nested arrays which track that "paths" / "branching structure"
  // of the questions?
  // for example, rather than ['q1-a1', 'q2-a1', 'q4-a3', q6-a5']
  // we have [['q1-a1', 'q2-a1'], ['q4-a3', 'q6-a5']]
  // {'q4': ['q1-a1', 'q2-a1'], 'q5': ['q1-a2', 'q6-a5']}

  // user chooses an answer. then the current question gets added
  // {'q1': ['q1-a1'], 'q1': ['q1-a2']}
  // {'q2': ['q1-a1', 'q2-a1'], 'q1': ['q1-a2']}
  const [answerIds, setAnswerIds] = useState<string[]>([])
  const [answerIdGroups, setAnswerIdGroups] = useState([])

  const handleRestartClick = () => {
    setCurrentQuestionId(STARTING_QUESTION_ID)
    setQuestionIds([STARTING_QUESTION_ID])
    setAnswerIds([])
  }

  const getCurrentQuestionIdIndex = () => questionIds.indexOf(currentQuestionId)

  // const addQuestionId = (questionId: string) => {
  //   setQuestionIds((questionIds) => [...questionIds, questionId])
  // }

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
    setQuestionIds((questionIds) => {
      return questionIds.filter((id) => id !== questionId)
    })
  }

  const goToQuestion = (questionId) => {
    setCurrentQuestionId(questionId)
  }

  // const goToPrevQuestion = () => {
  //   const prevQuestionId = questionIds[getCurrentQuestionIdIndex() - 1]
  //   setCurrentQuestionId(prevQuestionId)
  // }

  const goToNextQuestion = () => {
    console.log(getCurrentQuestionIdIndex())
    const nextQuestionId = questionIds[getCurrentQuestionIdIndex() + 1]
    console.log('next ', nextQuestionId)
    console.log(questionIds)
    goToQuestion(nextQuestionId)
  }

  const deselectAnswer = (answer) => {
    setAnswerIds((answerIds) => answerIds.filter((id) => id !== answer.id))
    removeQuestionId(answer.nextQuestionId)
  }

  const selectAnswer = (answer) => {
    setAnswerIds((answerIds) => answerIds.concat(answer.id))

    // addQuestionId(answer.nextQuestionId)
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
  const handleOptionClick = (answer) => {
    updateAnswerSelected(answer)
    if (!questionsData[currentQuestionId].multiselect) {
      if (answer.nextQuestionId) {
        goToQuestion(answer.nextQuestionId)
      } else {
        goToNextQuestion()
      }
    }
  }

  const handleBackClick = (answer) => {
    // check what is the current question based on currentQuestionId
    // check which answers were selected from currentQuestionId
    // if this is a multiselect, then deselect all answers for current question
    // and remove questionIds that were added due to the answers that we are deselecting
    // then go back to the previous question
    // and deselect all of the previous question's answers
    // and remove those questionIds that were added
    // goToPrevQuestion()
  }

  return (
    <>
      <GlobalStyle />

      <Header>
        <NavButton>Back</NavButton>
        <H1>Course Picker</H1>
        <NavButton onClick={handleRestartClick}>Restart</NavButton>
      </Header>
      <Main>
        <QuizBox>
          {currentQuestionId ? (
            <Quiz
              question={questionsData[currentQuestionId]}
              answers={questionsData[currentQuestionId].answerIds.map(
                (answerId) => answersData[answerId]
              )}
              answerIds={answerIds}
              handleOptionClick={handleOptionClick}
              goToNextQuestion={goToNextQuestion}
            />
          ) : (
            <Result
              userSelectedTags={answerIds.reduce(
                (userSelectedTags, answerId) => [
                  ...userSelectedTags,
                  ...answersData[answerId].tags
                ],
                []
              )}
            />
          )}
        </QuizBox>
      </Main>
    </>
  )
}
