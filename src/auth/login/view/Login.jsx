import React from 'react'
import { Form, NavLink, useActionData } from 'react-router-dom';
import {InputWithLabel, Button} from '../../../modules/shared';

//import axios from 'axios';

export default function Login () {
  const data = useActionData()
  return (
    <main className='login py-8 px-2 bg-primary'>
      <section className='user_login py-8 px-8'>
        <div className='section-heading text-center pb-1'>
          <h1 className='font-light text-lg text-tertiary'>Login to Somesha Dada</h1>
        </div>
        <hr />
        <div className="user_login__form py-8">
          <Form method='POST'>{/*<Form method='POST' action='/login'>*/}
            <InputWithLabel name={'userId'} id={'username'} placeholder={'email or phone number'} required={true}>
              username
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'} required={true}>
              password
            </InputWithLabel>
            <div className="forgot_password">
              <NavLink>forgot password?</NavLink>
            </div>
            <div className="form-group pt-12">
              <Button type='submit'>Login</Button>
            </div>
            {data && data.error && <p>{data.error}</p>}
          </Form>
        </div>
        <div className='acount_options pb-4'>
          <p>
            <span className='mr-1'> New to our platform?</span>
            <NavLink to={'/register'}>Register here</NavLink>
          </p>
        </div>
      </section>
    </main>
  )
}