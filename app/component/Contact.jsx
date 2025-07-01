import React from 'react'
import ContactForm from './ContactForm'
import OfficeInfo from './OfficeInfo'

const Contact = () => {
  return (
    <div className='bg-main flex w-full justify-between items-center lg:px-30'>
        <OfficeInfo/>
        <ContactForm />
    </div>
  )
}

export default Contact