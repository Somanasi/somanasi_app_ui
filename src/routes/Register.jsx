import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'

const Register = () => {
  return (
    <main className='login'>
      <section className='user_login'>
        <div className='section-heading'>
          <h1>Login to Somesha Dada</h1>
        </div>
        <div className="user_login__form">
          <Form method='POST'>
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