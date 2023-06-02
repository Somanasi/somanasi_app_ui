import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import InputWithLabel from '../../../shared/components/InputWithLabel'
import Button from '../../../shared/components/Button'

const Register = () => {
  return (
    <main className='login py-8 px-2 bg-primary'>
      <section className='user_login py-4 px-8'>
        <div className='section-heading text-center pb-1'>
          <h1 className='font-light text-lg text-tertiary'>Registration</h1>
        </div>
        <hr />
        <div className="user_login__form">
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
              <InputWithLabel name={'user_firstname'} id={'username'} placeholder={'Enter first name'} required={ true}>
                First Name
              </InputWithLabel>
              <InputWithLabel name={'user_lastname'} id={'username'} placeholder={'Enter last name'} required={ true}>
                Last  Name
              </InputWithLabel>
              <InputWithLabel name={'user_othername'} id={'username'} placeholder={'other name'}>
                Other Name
              </InputWithLabel>
            </div>
            <InputWithLabel type={'email'} name={'user_email'} id={'phoneNumber'} placeholder={'otherperson@someone.com'} required={ true}>
              Email
            </InputWithLabel>
            <InputWithLabel type={'tel'} name={'userId'} id={'phoneNumber'} placeholder={'0700268088'} required={ true}>
              Phone number
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'password'} id={'password'} required={ true}>
              password
            </InputWithLabel>
            <InputWithLabel type={'password'} name={'confirmPassword'} id={'reTypePassword'} required={ true}>
              Re-type password
            </InputWithLabel>
            <div className="gender py-6">
              <div>
                <input type="radio" name="gender" id="female" required/>
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" id="male" required/>
                <label htmlFor="male">Male</label>
              </div>
            </div>
            <div className="form-group terms_and_policy mb-6">
              <input type="checkbox" />
              <label htmlFor=""><span className='mr-1'> I agree to </span> <NavLink to={'terms'}> terms and conditions</NavLink></label>
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