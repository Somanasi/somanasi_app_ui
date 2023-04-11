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
                <option value="" selected disabled>Select a user type</option>
                <option value="student">Student</option>
                <option value="parent" disabled>Parent</option>
                <option value="school" disabled>School</option>
              </select>
            </div>
            <InputWithLabel name={'userId'} id={'username'} placeholder={'Enter your full name'}>
              Name
            </InputWithLabel>
            <InputWithLabel name={'userId'} id={'phoneNumber'} placeholder={'0700268088'}>
             Phone number
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'}>
              password
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'confirmPassword'} id={'reTypePassword'}>
              Re-type password
            </InputWithLabel>
            <div className="form-group">
              <input type="checkbox" />
              <label htmlFor=""> I agree to terms and conditions</label>
            </div>
            <Button type='submit'>Sign up</Button>
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