import React from 'react'
import intersection from 'lodash.intersection'
import sortBy from 'lodash.sortby'
import uniq from 'lodash.uniq'
import unionBy from 'lodash.unionby'
import {COURSES} from '../.././courses'
import {Tag} from '../.././types'

const Result = ({userSelectedTags}) => {
  const matchCoursesByTags = (tags: Tag[]) =>
    sortBy(
      COURSES.map((course, i) => ({
        ...course,
        matches: intersection(course.tags, tags)
      })),
      (item) => item.matches.length
    ).reverse()

  // returns a list of courses that have the maximum number of matching tags
  const filterCourseMatches = (courses) => {
    const maxMatchesLength = courses[0].matches.length
    const filteredMatches = courses.filter(
      (course) => course.matches.length === maxMatchesLength
    )
    return filteredMatches
  }

  // returns array of all prerequisite courses given an array of courses
  const getPrerequisites = (courses) => {
    const prerequisiteNames = uniq(
      courses.reduce(
        (prerequisites, course) => [...prerequisites, ...course.prerequisites],
        []
      )
    )
    const prerequisiteCourses = prerequisiteNames.map((courseName) =>
      COURSES.find((course) => course.name === courseName)
    )
    return prerequisiteCourses
  }

  const courseMatches = matchCoursesByTags(userSelectedTags)
  const filteredMatches = filterCourseMatches(courseMatches)
  const prerequisites = getPrerequisites(filteredMatches)
  const quizResults = sortBy(
    unionBy(prerequisites, filteredMatches, 'name'),
    (course) => course.prerequisites?.length
  )

  return (
    <>
      <h2>You should take these courses:</h2>
      {quizResults.map((course) => (
        <h3 key={course.name}>{course.name}</h3>
      ))}
    </>
  )
}

export default Result
