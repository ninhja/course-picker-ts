import React from 'react'

import intersectionBy from 'lodash.intersectionby'
import sortBy from 'lodash.sortby'
import uniq from 'lodash.uniq'
import differenceBy from 'lodash.differenceby'

import {COURSES} from '../.././courses'
import {TagId} from '../.././tags'
import {ResultBox, CourseBox, CoursesBox, RecommendationsBox} from './styles'
import {H2, H3, H4, P} from '../../styles'

const Course = ({course}) => (
  <CourseBox>
    <H4>{course.name}</H4>
    <P>weight: {course.weight}</P>
  </CourseBox>
)

const Courses = ({courses}) => (
  <CoursesBox>
    {courses.map((course) => (
      <Course key={course.name} course={course} />
    ))}
  </CoursesBox>
)

const Recommendations = ({title, courses}) => (
  <RecommendationsBox>
    <H3>{title}</H3>
    <Courses courses={courses} />
  </RecommendationsBox>
)

const Result = ({userSelectedTags}) => {
  // const sortCoursesByMatches = (courses) => {
  //   return sortBy(courses, (course) => course.matches.length).reverse()
  // }

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

  const sortCoursesByWeight = (courses) =>
    sortBy(courses, (course) => course.weight).reverse()

  const sortCoursesByPrerequisites = (courses) =>
    sortBy(courses, (course) => course.prerequisites.length).reverse()

  const weightCoursesByTags = (tags: TagId[]) => {
    // const sortedCoursesByWeight = sortCoursesByWeight(
    //   COURSES.map((course, i) => ({
    //     ...course,
    //     matches: getMatchingCourseTagIds(course, tags),
    //     weight: getWeight(course, tags)
    //   }))
    // )
    const sortedCoursesByPrereqs = sortCoursesByPrerequisites(
      COURSES.map((course, i) => ({
        ...course,
        matches: getMatchingCourseTagIds(course, tags),
        weight: getWeight(course, tags)
      }))
    )
    return sortCoursesByWeight(sortedCoursesByPrereqs)
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
    const prerequisites = differenceBy(
      getPrerequisites(mainRecommendations),
      mainRecommendations,
      'name'
    )
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

  return (
    <ResultBox>
      <H2>Top Picks for Arianna</H2>

      <Recommendations
        title={'You should take these courses:'}
        courses={mainRecommendations}
      />
      {prerequisites.length > 0 && (
        <>
          <Recommendations
            title={'But first, start with these courses:'}
            courses={prerequisites}
          />
          <Recommendations
            title={
              'Putting these together, here is your customized course pathway:'
            }
            courses={prerequisites.concat(mainRecommendations)}
          />
        </>
      )}

      <Recommendations
        title={'You might also be interested in these courses:'}
        courses={otherRecommendations}
      />
    </ResultBox>
  )
}

export default Result
