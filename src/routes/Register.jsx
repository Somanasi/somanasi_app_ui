import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'

const Register = () => {
  return (
    <main className='login'>
      <section className='user_login'>
        <div className='section-heading'>
          <h1>Register for Somesha Dada</h1>
        </div>
        <div className="user_login__form">
          <Form method='POST'>
            <div className="form-group">
              <label htmlFor="user_type">
                Register as a
              </label>
              <select name="user_type" id="user_type">
                <option value="Student" selected disabled>Select a user type</option>
                <option value="student">Student</option>
                <option value="parent" disabled>Parent</option>
                <option value="school" disabled>School</option>
              </select>
            </div>
            <InputWithLabel name={'userId'} id={'username'}>
              Username or Phone number
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'}>
              password
            </InputWithLabel>
            <Button type='submit'>Continue</Button>
          </Form>
        </div>
        <div className='new_user'>
          <p>
            <span> Already have an account?</span>
            <NavLink to={'/register'}>Sign in instead</NavLink>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register