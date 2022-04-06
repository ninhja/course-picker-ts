import React from 'react'

import intersectionBy from 'lodash.intersectionby'
import sortBy from 'lodash.sortby'
import uniq from 'lodash.uniq'
import differenceBy from 'lodash.differenceby'

import {COURSES, Course, CourseTag} from '../.././courses'
import {ResultBox, CourseBox, CoursesBox, RecommendationsBox} from './styles'
import {H2, H3, H4, P} from '../../styles'

type WeightedCourse = Course & {
  weight: number
}

const CourseComponent = ({course}: {course: WeightedCourse}) => (
  <CourseBox>
    <H4>{course.name}</H4>
    <P>weight: {course.weight}</P>
  </CourseBox>
)

const CoursesComponent = ({courses}: {courses: WeightedCourse[]}) => (
  <CoursesBox>
    {courses.map((course) => (
      <CourseComponent key={course.name} course={course} />
    ))}
  </CoursesBox>
)

const Recommendations = ({
  title,
  courses
}: {
  title: string
  courses: WeightedCourse[]
}) => (
  <RecommendationsBox>
    <H3>{title}</H3>
    <CoursesComponent courses={courses} />
  </RecommendationsBox>
)

const Result = ({userSelectedTags}: {userSelectedTags: string[]}) => {
  // const sortCoursesByMatches = (courses) => {
  //   return sortBy(courses, (course) => course.matches.length).reverse()
  // }

  // returns an array of CourseTag objects
  const getMatchingCourseTags = (course: Course, tags: string[]): CourseTag[] =>
    intersectionBy(
      course.tags,
      tags.map((tag) => ({
        id: tag
      })),
      (tag) => tag.id
    )

  // const getMatchingCourseTagIds = (course, tags) =>
  //   getMatchingCourseTags(course, tags).map((courseTag) => courseTag.id)

  const getWeight = (course: Course, tags: string[]): number =>
    getMatchingCourseTags(course, tags).reduce(
      (weight, tag) => weight + tag.weight,
      0
    )

  const sortCoursesByWeight = (courses) =>
    sortBy(courses, (course) => course.weight).reverse()

  const sortCoursesByPrerequisites = (courses) =>
    sortBy(courses, (course) => course.prerequisites.length).reverse()

  const weightCoursesByTags = (tags: string[]) => {
    const sortedCoursesByPrereqs = sortCoursesByPrerequisites(
      COURSES.map((course, i) => ({
        ...course,
        // matches: getMatchingCourseTagIds(course, tags),
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

  const getRecommendedCourses = (tags: string[]) => {
    const weightedCourses = weightCoursesByTags(tags)
    const largestWeight = weightedCourses[0].weight
    const mainRecommendations = filterCoursesByWeight(
      weightedCourses,
      largestWeight
    )
    const prerequisites = differenceBy(
      getPrerequisites(mainRecommendations),
      mainRecommendations,
      'name'
    )
    const otherRecommendations = differenceBy(
      weightedCourses,
      [...mainRecommendations, ...prerequisites],
      'name'
    ).slice(0, 3)

    return [mainRecommendations, otherRecommendations, prerequisites]
  }

  const [
    mainRecommendations,
    otherRecommendations,
    prerequisites
  ] = getRecommendedCourses(userSelectedTags)

  return (
    <ResultBox>
      <H2>Top Picks for Arianna</H2>

      <Recommendations
        title={'Here is your recommended course path:'}
        courses={prerequisites.concat(mainRecommendations)}
      />

      <Recommendations
        title={'You might also be interested in these courses:'}
        courses={otherRecommendations}
      />
    </ResultBox>
  )
}

export default Result
