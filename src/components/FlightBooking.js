import React, { useState } from 'react'

const FlightBooking = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emaiId, setEmailId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleBooking = () => {
        if(!firstName || !lastName || !emaiId || !phoneNumber) {
            alert("ALL THE FIELDS ARE REQUIRED!");
            return;
        }
        window.location.href = '/confirmation';
    }


  return (
    <div className='book-flight'>
        <h2>Booking Confirmation for Flight Air India (AI-275)</h2>
        <div>
            <label htmlFor="fname">First Name *</label>
            <input type="text" id='fname' required onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id='lastName' required onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email ID *</label>
            <input type="email" id='email' required onChange={(e) => setEmailId(e.target.value)} />
        </div>
        <div>
            <label htmlFor="mobileNumber">Mobile Number *</label>
            <input type="text" id='mobileNumber' required onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <button onClick={handleBooking} style={{textTransform: 'uppercase'}}>Confirm Booking</button>
    </div>
  )
}

export default FlightBooking