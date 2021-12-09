// import {courses} from './courses.js'
// import intersection from 'lodash.intersection'
// import sortBy from 'lodash.sortby'

// import {Tag} from './types'
// import {COURSES} from './courses'

// const questionIdsToAnswer: string[] = []
// const userSelectedTags: Tag[] = ['creation:website', 'topic:code']

// const matchCourseByTags = (tags: Tag[]) =>
//   sortBy(
//     COURSES.map((course, i) => ({
//       ...course,
//       matches: intersection(course.tags, tags)
//     })),
//     (item) => item.matches.length
//   ).reverse()

// console.log(matchCourseByTags(userSelectedTags))
// // console.log('You should take', matchCourseByTags(userSelectedTags)[0].name)

import {StrictMode} from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)
