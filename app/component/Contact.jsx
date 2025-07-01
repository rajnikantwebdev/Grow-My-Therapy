import React from 'react'
import ContactForm from './ContactForm'
import OfficeInfo from './OfficeInfo'

const Contact = () => {
  return (
    <section id='contact' className="md:flex flex-row-reverse mx-auto py-6 md:py-12 justify-between items-center max-w-5xl px-5 space-y-8 md:space-y-0">
      <ContactForm />
      <OfficeInfo />
    </section>
  );
}

export default Contact