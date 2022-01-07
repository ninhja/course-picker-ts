import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles'

export const CourseBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 20px;
  width: 260px;
  text-align: left;
  height: 128px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CourseTitle = styled.h3`
  font-size: 18px;
`

export const CoursesBox = styled.div`
  width: 860px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`
