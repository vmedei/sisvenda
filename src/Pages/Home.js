import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Link to="/login" className='btn__primary'>LOGIN</Link>
    </>
  )
}

export default Home