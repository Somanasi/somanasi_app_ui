import React from 'react'
import { Form } from 'react-router-dom'
import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'

const Login = () => {
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
            <Button type='submit'>Continue</Button>
          </Form>
        </div>
      </section>
    </main>
  )
}

export default Login