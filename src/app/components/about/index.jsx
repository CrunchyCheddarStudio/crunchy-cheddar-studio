import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
        {children}
    </div>
}

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>
                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-2xl text-left w-full capitalize text-accent'>
                        Master Chef of the kitchen, elevate the cheddar to perfection.
                    </h2>
                    <p className='font-light'>
                        In the bustling kitchen of Crunchy Cheddar Studio, my journey in web development unfolds like a delectable recipe, 
                        powered by an array of sharp tools and languages. 
                        With JavaScript as the melting core of my cooking, I deftly wield frameworks like React.js and Next.js, 
                        slicing through code with precision to craft seamless dishes (websites) that whisk users away to digital realms.
                        Harnessing the ancient arts of the Jamstack, I imbue my creations with speed, security, 
                        and dynamism, ensuring each experience is as satisfying as a bite of aged cheddar. But my mastery extends beyond the web; 
                        I've been blessed with the wisdom of creating fun games in Unity C#, blending flavors of entertainment with technical prowess.
                        Join me, fellow connoisseurs, as I continue to explore new recipes and technologies, shaping the future of the web and gaming landscape with a dash of cheesy delight.
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        5+ <sub className='font-semibold text-base'>clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        3+ <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-4 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=crunchycheddarstudio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="crunchycheddarstudio" loading='lazy' />
                </ItemLayout>
                <ItemLayout className={"col-span-8 p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=crunchycheddarstudio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="crunchycheddarstudio" loading='lazy' />
                </ItemLayout>
                <ItemLayout className={"col-span-full"}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,astro,css,cs,cmake,discord,discordjs,figma,firebase,git,github,heroku,materialui,mysql,netlify,nextjs,nodejs,notion,npm,powershell,react,stackoverflow,solidity,tailwind,threejs,ts,unity,vercel,vite,vscode" alt="crunchycheddarstudio" loading='lazy' />
                </ItemLayout>
                <ItemLayout className={"col-span-6 !p-0"}>
                <img className='w-full h-auto' src="http://github-readme-streak-stats.herokuapp.com?user=crunchycheddarstudio&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="CrunchyCheddarStudio" loading='lazy' />
                </ItemLayout>
                <ItemLayout className={"col-span-6 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=crunchycheddarstudio&repo=lotzed-lottery-contract&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="crunchycheddarstudio" loading='lazy' />
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails
