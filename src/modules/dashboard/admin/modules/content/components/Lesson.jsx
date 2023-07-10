import React from 'react'
import { InputWithLabel } from '../../../../../shared'

const Lesson = () => {
  return (
    <>
    <InputWithLabel name={"lesson_title"} placeholder={"Lesson Title"}/>
    <InputWithLabel name={"lesson_description"} placeholder={"Lesson Description"}/>
    </>
  )
}

export default Lesson