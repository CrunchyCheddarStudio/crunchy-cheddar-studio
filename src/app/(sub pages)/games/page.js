import React from 'react'
import bg from "../../../../public/background/games-background.png"
import Image from 'next/image'

export default function page() {
  return (
    <>
      <Image priority sizes="100vw" src={bg} alt="background-image" className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25' />

    </>
  )
}

