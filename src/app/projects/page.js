import React from 'react'
import bg from "../../../public/background/projects-background.png"
import Image from 'next/image'

export default function page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between relative'>
        <Image src={bg} alt="background-image" fill className='-z-50 w-full h-full object-cover object-center opacity-25' />
    </main>
  )
}

