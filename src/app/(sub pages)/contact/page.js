import React from 'react'
import bg from "../../../../public/background/contact-background.png"
import Image from 'next/image'
import Form from '../../components/contact/Form'

export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image" className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25' />

      <article className='relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8'>
        <div className='flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4'>
          <h1 className='text-accent font-semibold text-center text-4xl capitalize'>
            Summon the chef
          </h1>
          <p className='text-center font-light text-sm xs:text-base'>
          Welcome to Crunchy Cheddar Studio, where creativity meets passion! If you're seeking top-notch game or web development services, look no further. 
          Let's collaborate and bring your vision to life, pixel by pixel or code by code. 
          Drop me a line below and let's make magic happen together.
          </p>
        </div>
        <Form />
      </article>
    </>
  )
}

