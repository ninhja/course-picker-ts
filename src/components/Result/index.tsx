import React from 'react'

// import intersection from 'lodash.intersection'
import intersectionBy from 'lodash.intersectionby'
// import intersectionWith from 'lodash.intersectionwith'
import sortBy from 'lodash.sortby'
import uniq from 'lodash.uniq'
// import unionBy from 'lodash.unionby'
import differenceBy from 'lodash.differenceby'

import {COURSES} from '../.././courses'
import {TagId} from '../.././types'
import {CourseBox, CourseTitle, CoursesBox} from './styles'

const Course = ({course}) => (
  <CourseBox>
    <CourseTitle>{course.name}</CourseTitle>
    <p>weight: {course.weight}</p>
    {/* <div>{course.tags.join(', ')}</div> */}
  </CourseBox>
)

const Courses = ({courses}) => (
  <CoursesBox>
    {courses.map((course) => (
      <Course key={course.name} course={course} />
    ))}
  </CoursesBox>
)

const Result = ({userSelectedTags}) => {
  // const sortCoursesByMatches = (courses) => {
  //   return sortBy(courses, (course) => course.matches.length).reverse()
  // }

  const sortCoursesByWeight = (courses) => {
    return sortBy(courses, (course) => course.weight).reverse()
  }

  // returns an array of CourseTag objects
  const getMatchingCourseTags = (course, tags) =>
    intersectionBy(
      course.tags,
      tags.map((tag) => ({
        id: tag
      })),
      (tag) => tag.id
    )

  const getMatchingCourseTagIds = (course, tags) =>
    getMatchingCourseTags(course, tags).map((courseTag) => courseTag.id)

  const getWeight = (course, tags) =>
    getMatchingCourseTags(course, tags).reduce(
      (weight, tag) => weight + tag.weight,
      0
    )

  const weightCoursesByTags = (tags: TagId[]) => {
    return sortCoursesByWeight(
      COURSES.map((course, i) => ({
        ...course,
        matches: getMatchingCourseTagIds(course, tags),
        weight: getWeight(course, tags)
      }))
    )
  }

  // returns a list of courses that have the maximum number of matching tags
  // const filterCoursesByMatches = (courses) => {
  //   const maxMatchesLength = courses[0].matches.length
  //   const filteredMatches = courses.filter(
  //     (course) => course.matches.length === maxMatchesLength
  //   )
  //   return filteredMatches
  // }

  const filterCoursesByWeight = (courses, weight) =>
    courses.filter((course) => course.weight === weight)

  // returns array of all prerequisite courses given an array of courses
  const getPrerequisites = (courses) => {
    const prerequisiteCourseNames = uniq(
      courses.reduce(
        (prerequisites, course) => [...prerequisites, ...course.prerequisites],
        []
      )
    )
    const prerequisiteCourses = prerequisiteCourseNames.map((courseName) =>
      COURSES.find((course) => course.name === courseName)
    )
    return prerequisiteCourses
  }

  const getRecommendedCourses = (courses) => {
    const largestWeight = courses[0].weight
    const mainRecommendations = filterCoursesByWeight(courses, largestWeight)
    const prerequisites = getPrerequisites(mainRecommendations)
    const otherRecommendations = differenceBy(
      courses,
      [...mainRecommendations, ...prerequisites],
      'name'
    ).slice(0, 3)

    return [mainRecommendations, otherRecommendations, prerequisites]
  }

  const weightedCourses = weightCoursesByTags(userSelectedTags)
  console.log(weightedCourses)
  const [
    mainRecommendations,
    otherRecommendations,
    prerequisites
  ] = getRecommendedCourses(weightedCourses)
  // const quizResults = sortBy(
  //   filteredMatches,
  //   (course) => course.prerequisites?.length
  // )

  return (
    <>
      {/* <div>{userSelectedTags.join(', ')}</div> */}
      <h2>You should take these courses:</h2>
      <Courses courses={mainRecommendations} />

      <h2>But first, you should start with these prerequisites:</h2>
      <Courses courses={prerequisites} />

      <h2>You might also be interested in these related courses:</h2>
      <Courses courses={otherRecommendations} />
    </>
  )
}

export default Result
