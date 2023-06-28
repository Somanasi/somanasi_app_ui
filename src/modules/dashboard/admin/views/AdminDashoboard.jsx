import React from 'react'
import { Form, redirect } from 'react-router-dom'

const AdminDashoboard = () => {
  return (
    <Form method='POST' action='/admin'>
      <input type="text"  placeholder='somethis...'/>
      <button type='submit'>send</button>
    </Form>
  )
}

export default AdminDashoboard

export const testAction = async( {request}) => {
  console.log(request);
  return redirect('/admin');
}