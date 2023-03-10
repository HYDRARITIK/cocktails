import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section className="error-page section">
        <div className="error-container">
          <h1>sorry you are on the wrong end!</h1>
          <Link to='/' className='btn btn-primary'>go to home</Link>
        </div>
      </section>
    </>
  )
}

export default Error
