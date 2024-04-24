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
                        With JavaScript as the melting core of my enchantments, I deftly wield frameworks like React.js and Next.js, 
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
            </div>
        </section>
    )
}

export default AboutDetails
