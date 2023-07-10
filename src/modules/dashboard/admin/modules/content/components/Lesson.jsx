import React from 'react'
import { InputWithLabel } from '../../../../../shared'
import LessonTextEditor from './LessonTextEditor'

const Lesson = () => {
  return (
    <>
    <InputWithLabel name={"lesson_title"} placeholder={"Lesson Title"}/>
    <InputWithLabel name={"lesson_description"} placeholder={"Lesson Description"}/>
    <LessonTextEditor />
    </>
  )
}

export default Lesson
export default Lesson