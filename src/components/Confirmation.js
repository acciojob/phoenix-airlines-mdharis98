import React from 'react'

const Confirmation = () => {
  return (
    <div>
        <h3>Thank you for the booking. Click the below button to return to home page.</h3>
        <button onClick={() => window.location.href = '/'} style={{textTransform: 'uppercase'}}>Back to Home</button>
    </div>
  )
}

export default Confirmation