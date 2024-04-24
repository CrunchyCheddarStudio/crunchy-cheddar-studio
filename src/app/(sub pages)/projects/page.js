import React from 'react'
import bg from "../../../../public/background/projects-background.png"
import Image from 'next/image'
import ProjectList from '../../components/projects'
import { projectsData } from '../../data'
import RenderModel from '../../components/RenderModel'
import CheeseAvatar from '../../models/CheeseAvatar'

export default function page() {
  return (
    <>
        <Image src={bg} alt="background-image"  className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25' />
        <ProjectList projects={projectsData} />
        <div className='flex items-center justify-center fixed top-20 -left-5 h-screen'>
        <RenderModel>
            <CheeseAvatar />
        </RenderModel>            
        </div>

    </>
  )
}

