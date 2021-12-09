import React from 'react'

const Result = ({userSelectedTags, matchCourseByTags}) => {
  console.log(matchCourseByTags(userSelectedTags))
  return <>You should take {matchCourseByTags(userSelectedTags)[0].name}</>
}

export default Result
