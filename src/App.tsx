import intersection from 'lodash.intersection'
import sortBy from 'lodash.sortby'
import React, {useState, useEffect} from 'react'
import {GlobalStyle, Header, NavButton, H1, QuizBox} from './styles'
import Quiz from './components/Quiz'
import Result from './components/Result'
import {QUESTIONS} from './questions'
import {COURSES} from './courses'
import {Tag} from './types'

export default function App() {
  const getBlankQuestionsData = () =>
    QUESTIONS.reduce((questionsData, currentQuestion) => {
      const {id, answers, ...restOfCurrentQuestion} = currentQuestion
      return {
        ...questionsData,
        [id]: restOfCurrentQuestion
      }
    }, {})

  const getBlankAnswersData = () =>
    QUESTIONS.reduce(
      (answersData, currentQuestion) => ({
        ...answersData,
        [currentQuestion.id]: currentQuestion.answers.map((answer, index) => ({
          ...answer,
          selected: false
        }))
      }),
      {}
    )

  const STARTING_QUESTION_ID = 'q1'
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(
    STARTING_QUESTION_ID
  )
  const [questionIds, setQuestionIds] = useState<string[]>([
    STARTING_QUESTION_ID
  ])
  const [questionsData, setQuestionsData] = useState<Object>(
    getBlankQuestionsData()
  )
  const [answersData, setAnswersData] = useState<Object>(getBlankAnswersData())
  const [userSelectedTags, setUserSelectedTags] = useState<Tag[]>([])

  useEffect(() => {
    if (questionIds.length > 0) {
      setCurrentQuestionId(questionIds[0])
    }
  }, [questionIds])

  const handleRestartClick = () => {
    setUserSelectedTags([])
    setQuestionsData(getBlankQuestionsData())
    setAnswersData(getBlankAnswersData())
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
    setQuestionIds((questionIds) => questionIds.slice(1))
  }

  const handleNextQuestion = () => {
    removeCurrentQuestionId()
  }

  const handleOptionClick = (answer) => {
    if (!questionsData[currentQuestionId].multiselect) {
      addUserSelectedTags(answer.tags)
      addQuestionId(answer.nextQuestionId)
      handleNextQuestion()
    }
  }

  const matchCourseByTags = (tags: Tag[]) =>
    sortBy(
      COURSES.map((course, i) => ({
        ...course,
        matches: intersection(course.tags, tags)
      })),
      (item) => item.matches.length
    ).reverse()

  return (
    <>
      <GlobalStyle />

      <Header>
        <NavButton>Back</NavButton>
        <H1>Course Picker</H1>
        <NavButton onClick={handleRestartClick}>Restart</NavButton>
      </Header>

      <QuizBox>
        {currentQuestionId ? (
          <Quiz
            question={questionsData[currentQuestionId]}
            answers={answersData[currentQuestionId]}
            handleOptionClick={handleOptionClick}
            handleNextQuestion={handleNextQuestion}
          />
        ) : (
          <Result
            userSelectedTags={userSelectedTags}
            matchCourseByTags={matchCourseByTags}
          />
        )}
      </QuizBox>
    </>
  )
}
