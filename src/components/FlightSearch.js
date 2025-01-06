import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FlightSearch = () => {
    const [tripType, setTripType] = useState('one-way');
    const [sourceCity, setSourceCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [flights, setFlights] = useState([]);

    const handleSearch = () => {
        if(!sourceCity || !destinationCity || !journeyDate) {
            alert("All the fields are required *");
            return;
        }
        let mockFlights = [
            {id: 1, from: sourceCity, to: destinationCity, price: 3000, arrivalTime: '11:00 PM', departureTime: '4:00 AM'},
            {id: 2, from: sourceCity, to: destinationCity, price: 3500, arrivalTime: '8:00 AM', departureTime: '5:00 PM'},
            {id: 3, from: sourceCity, to: destinationCity, price: 3000, arrivalTime: '11:00 PM', departureTime: '4:00 AM'},
        ]
        if(tripType === 'round-trip') {
            mockFlights.push(
                {id: 4, from: destinationCity, to: sourceCity, price: 3000, arrivalTime: '11:00 PM', departureTime: '4:00 AM'},
                {id: 5, from: destinationCity, to: sourceCity, price: 3000, arrivalTime: '11:00 PM', departureTime: '4:00 AM'}
            )
        }
        setFlights(mockFlights);
    }

    return (
        <div>
            <div>
                <div>
                    <input id='oneWay' type="radio" name='trip' onChange={() => setTripType('one-way')} defaultChecked />
                    <label htmlFor="oneWay">One Way</label>
                </div>
                <div>
                    <input id='roundTrip' type="radio" name='trip' onChange={() => setTripType('round-trip')} />
                    <label htmlFor="roundTrip">Round Trip</label>
                </div>
            </div>

            <div>
                <input type="text" placeholder='Source City' onChange={(e) => setSourceCity(e.target.value)} />
                <input type="text" placeholder='Destination City' onChange={(e) => setDestinationCity(e.target.value)} />

                <div>
                    <label htmlFor="journeyDate">Journey Date</label>
                    <input type="date" id='journeyDate' onChange={(e) => setJourneyDate(e.target.value)} />
                </div>

                {
                    tripType === 'round-trip' && 
                    <div>
                        <label htmlFor="returnDate">Return Date</label>
                        <input type="date" id='returnDate' onChange={(e) => setReturnDate(e.target.value)} />
                    </div>
                }
            </div>

            <button onClick={handleSearch}>Search Flight</button>

            <div className='flight-results'>
                {
                    flights.map((flight) => (
                        <div>
                            <div>
                                <span>{flight.departureTime}</span>
                                <span>{flight.from}</span>
                            </div>
                            <div>
                                <span>Air India</span>
                                <span>AI-275</span>
                                <span>No Stops</span>
                            </div>
                            <div>
                                <span>{flight.arrivalTime}</span>
                                <span>{flight.to}</span>
                            </div>
                            <Link to='/flight-booking'>Rs {flight.price}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FlightSearch