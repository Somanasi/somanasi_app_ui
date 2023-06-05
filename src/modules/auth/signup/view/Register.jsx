import React from 'react'
import { Form, NavLink, useActionData } from 'react-router-dom'
import {InputWithLabel, Button} from '../../../shared'

const Register = () => {
  const errors = useActionData();
  return (
    <main className='register py-8 px-2 bg-primary'>
      <section className='new_user py-4 px-8'>
        <div className='section-heading text-center pt-8 pb-1'>
          <h1 className='font-light text-lg text-tertiary'>Registration</h1>
        </div>
        <hr />
        <div className="new_user__form">
          <Form method='POST'>
            <div className="form-group user_type_groups py-4 ">
              {/* <div>
                <input type="radio" name="user_type" id="admin" value={'admin'} />
                <label htmlFor="admin">Admin</label>
              </div> */}
              <div>
                <input type="radio" name="user_type" id="workspace" value={'wrokspace'} required/>
                <label htmlFor="workspace">Workspace</label>
              </div>
              <div>
                <input type="radio" name="user_type" id="student" value={'student'} required/>
                <label htmlFor="student">Student</label>
              </div>
            </div>
            <div className="name">
              <InputWithLabel name={'user_firstname'} id={'firstname'} placeholder={'Enter first name'} required={ true} error={...errors}>
                First Name
              </InputWithLabel>
              <InputWithLabel name={'user_lastname'} id={'lastname'} placeholder={'Enter last name'} required={ true} error={...errors}>
                Last  Name
              </InputWithLabel>
              <InputWithLabel name={'user_othername'} id={'othername'} placeholder={'other name'} error={...errors}>
                Other Name
              </InputWithLabel>
            </div>
            <InputWithLabel type={'email'} name={'user_email'} id={'email'} placeholder={'otherperson@someone.com'} required={ true} error={...errors}>
              Email
            </InputWithLabel>
            <InputWithLabel type={'tel'} name={'userId'} id={'phoneNumber'} placeholder={'0700268088'} required={ true} error={...errors}>
              Phone number
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'} required={ true} error={...errors}>
              password
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'confirmPassword'} id={'reTypePassword'} required={ true} error={...errors}>
              Re-type password
            </InputWithLabel>
            <div className="gender py-6">
              <div>
                <input type="radio" name="gender" value={'female'} id="female" required/>
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value={'male'} id="male" required/>
                <label htmlFor="male">Male</label>
              </div>
            </div>
            <div className="form-group terms_and_policy mb-6">
              <input type="checkbox" required/>
              <label htmlFor=""><span className='mr-1'> Click here to agree to our </span> <NavLink to={'terms'}> terms and conditions</NavLink> <span>and our </span> <NavLink>data protection policy</NavLink></label>
            </div>
              <div className='form-group'>
              <Button type='submit'>Sign up</Button>
              </div>
          </Form>
        </div>
        <div className='acount_options py-8'>
          <p>
            <span className='mr-1'> Already have an account?</span>
            <NavLink to={'/login'}>Sign in</NavLink>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register