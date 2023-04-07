import React from 'react'
import { Form } from 'react-router-dom'
import Input from '../components/Input'
const Home = () => {
  return (
    <main className='home'>
      <section className='searchBar'>
        <Form method='GET'>
          <Input></Input>
        </Form>
      </section>
    </main>
  )
}

export default Home