import './../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Landing'
import FlightSearch from './FlightSearch'
import FlightBooking from './FlightBooking'
import Confirmation from './Confirmation'
import React from 'react';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/flight-search',
      element: <FlightSearch />
    },
    {
      path: '/flight-booking',
      element: <FlightBooking />
    },
    {
      path: '/confirmation',
      element: <Confirmation />
    },
  ])

  return (
    <div>
      <RouterProvider router={router}>
        <h2>Flight Booking App</h2>
        <Landing />
      </RouterProvider>
    </div>
  )
}

export default App

