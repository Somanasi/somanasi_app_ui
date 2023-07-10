import React from 'react'
import { Form } from 'react-router-dom'
import {InputWithLabel} from '../../../../../shared'
import Lesson from '../components/Lesson'

const CreateContent = () => {
  return (
    <main>
      <section className="">
        <h1>Create a new course</h1>
      </section>
      <section className="">
          <Form>
            <fieldset>
              <legend>Course information</legend>
              <InputWithLabel name="course_title" placeholder="Course Title" required={true} />
              <InputWithLabel name="course_descrition" placeholder="Course description" required={true} />
              <select name="course_category" placeholder="Course category">
                  <option value=""> Please select a course category</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Lesson</legend>
              <input list={"course_level"} name={"course_level"} id={"course_level"} placeholder={"Course Level"} />
              <datalist id={"course_level"}>
                <option value="Week 1">Week 1</option>
              </datalist>
              <Lesson/>
            </fieldset>
          </Form>
      </section>
    </main>
  )
}

export default CreateContent