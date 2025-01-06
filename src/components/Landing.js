import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <h2>Welcome to Flight Booking App</h2>
        <Link to='/flight-search' style=
        {
            {
                textTransform: 'uppercase',
                border: '1px solid blue',
                padding: '0.5rem 1.2rem',
                color: 'blue',
                borderRadius: '5px'
            }
        }>Search Flights Here</Link>
    </div>
  )
}

export default Landing