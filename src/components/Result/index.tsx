import React from 'react'

import intersection from 'lodash.intersection'
import intersectionBy from 'lodash.intersectionby'
import intersectionWith from 'lodash.intersectionwith'
import sortBy from 'lodash.sortby'
import uniq from 'lodash.uniq'
import unionBy from 'lodash.unionby'

import {COURSES} from '../.././courses'
import {TagId} from '../.././types'

const Result = ({userSelectedTags}) => {
  const sortCoursesByMatches = (courses) => {
    return sortBy(courses, (course) => course.matches.length).reverse()
  }

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

  const weightedCourses = weightCoursesByTags(userSelectedTags)
  // console.log(courseMatches)
  console.log(weightedCourses)
  const recommendedCourses = filterCourseMatches(weightedCourses)
  const prerequisiteCourses = getPrerequisites(recommendedCourses)
  // const quizResults = sortBy(
  //   filteredMatches,
  //   (course) => course.prerequisites?.length
  // )

  return (
    <>
      <h2>You should take these courses:</h2>
      {/* <div>{userSelectedTags.join(', ')}</div> */}
      {recommendedCourses.map((course) => (
        <h3 key={course.name}>
          {course.name}, weight: {course.weight}
          {/* <div>{course.tags.join(', ')}</div> */}
        </h3>
      ))}

      <h2>You should take these prerequisites:</h2>
      {prerequisiteCourses.map((course) => (
        <h3 key={course.name}>{course.name}</h3>
      ))}
    </>
  )
}

export default Result
