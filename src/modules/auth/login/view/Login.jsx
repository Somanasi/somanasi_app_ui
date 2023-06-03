import React from 'react'
import { Form, NavLink, redirect, useActionData } from 'react-router-dom'
import InputWithLabel from '../../../shared/components/InputWithLabel'
import Button from '../../../shared/components/Button'

//import axios from 'axios';
//import Cookies from "universal-cookie";
//const cookies = new Cookies();

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
          <Form method='POST' action='/login'>
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

export const loginAction = async ({request}) => {
  const data = await request.formData()
  const submitted = {
    password: data.get('password'),
    userId: data.get('userId'),
  }
  console.log(submitted)//check output on browser console

  //validate password length
  if(submitted.password.length < 8){
    return {error: "Password must be over 8 characters long!"}
  }
  //send post request. use axios here after opening database

  /*const configuration = {
    method:"post",
    url:"http://localhost:9000/login",
    data:{userId, password},
  };
  axios(configuration)
  .then((result)=>{
      setLogin(true);
      //set the cookie and using "/" makes it available on all pages.
      //result.data.token is the value of the cookie
      cookies.set("TOKEN", result.data.token, {path:"/",});
      //redirect opens about us page after a successful login. Change to convenience*/
      return redirect ("/about_us") 
  /*})
  .catch((error)=>{error = new Error();});*/
}
