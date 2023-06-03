import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import InputWithLabel from '../../../shared/components/InputWithLabel'
import Button from '../../../shared/components/Button'

const Login = () => {
  return (
    <main className='login py-8 px-2 bg-primary'>
      <section className='user_login py-4 px-8'>
        <div className='section-heading text-center pb-1'>
          <h1>Login to Somesha Dada</h1>
        </div>
        <hr />
        <div className="user_login__form">
          <Form method='POST'>
            <InputWithLabel name={'userId'} id={'username'}>
              email or Phone number
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'}>
              password
            </InputWithLabel>
            <div className="form-group">
              <Button type='submit'>login</Button>
            </div>
          </Form>
        </div>
        <div className='new_user'>
          <p>
            <span> New to our platform?</span>
            <NavLink to={'/register'}>Register Here</NavLink>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login