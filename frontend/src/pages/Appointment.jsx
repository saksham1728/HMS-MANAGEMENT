import React from 'react'
import Hero from '../components/Hero'
import AppointmentForm from "../components/AppointmentForm"

const Appointment = () => {
  return (
    <>
    <Hero title={"Schedule Your Appointment online with zero convinence fee with CANS Multi Specialty Hospital"} imageUrl={"/signin.png"}/>
    <AppointmentForm/>
      
    </>
  )
}

export default Appointment
