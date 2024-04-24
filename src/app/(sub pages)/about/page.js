import React from 'react'
import bg from "../../../../public/background/about-background.png"
import Image from 'next/image'
import RenderModel from '../../components/RenderModel'
import CheeseMoon from '../../models/CheeseMoon'

export default function page() {
  return (
    <>
      <Image src={bg} alt="background-image" className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25' />
      <div className='w-full h-screen absolute top-60 -translate-y-1/2 left-0'>
        <RenderModel>
          <CheeseMoon />
        </RenderModel>
      </div>
      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
        <div className='absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'>
          <h1 className='font-bold text-9xl text-accent'>Crunchy Cheddar Studio</h1>
          <p className='font-light text-foreground text-lg'>Meet the chef behind this studio.</p>
        </div>
      </div>


    </>
  )
}

