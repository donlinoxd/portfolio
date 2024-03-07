import PrimaryButton from '@/components/primary-button'
import SocialLinks from '@/components/social-links'
import { Metadata } from 'next'
import Image from 'next/image'
import { LuDownload } from 'react-icons/lu'

export const metadata: Metadata = {
    title: 'Portfolio | Lino Escuyos',
    description: `Lino Escuyos Jr., a ${Math.floor(
        (+new Date() - +new Date('1995-04-11')) / (1000 * 60 * 60 * 24 * 365.25)
    )}-year-old front end developer with ${
        new Date().getFullYear() - 2022
    } years of experience, showcases mastery in HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Redux, and React Query. Explore his expertise in frontend technologies and backend skills including Node.js, Express, GraphQL, and tRPC on his portfolio website.`,
}

export default function Home() {
    return (
        <div className='overflow-x-hidden relative'>
            <div className='container flex h-screen flex-col md:flex-row justify-center md:justify-normal gap-8 md:gap-0'>
                <div className='relative w-full md:w-1/2 md:h-full z-[100] grid place-items-center'>
                    <div className='relative w-4/5 max-w-[350px] md:max-w-full aspect-square [transform:rotateY(180deg)] pointer-events-none after:bg-white after:absolute after:[content:" "] after:h-full after:animate-fill-text'>
                        <Image
                            src='/images/dev.png'
                            alt='hero image'
                            fill
                            className='object-contain animate-opacity-text opacity-0'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:h-full flex justify-center flex-col '>
                    <div className='flex flex-col gap-2 md:gap-6 md:items-start items-center text-center md:text-left'>
                        <div className='text-xl md:text-2xl lg:text-4xl after:bg-white after:absolute relative after:[content:" "] after:h-full after:animate-fill-text'>
                            <span className='animate-opacity-text opacity-0'>Hello! I am</span>
                        </div>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 leading-[102%] md:leading-[115%] after:bg-white after:absolute relative after:[content:" "] after:h-full after:animate-fill-text'>
                            <span className='animate-opacity-text opacity-0'>Lino Escuyos.</span>
                        </h1>
                        <div className='text-base md:text-lg lg:text-xl flex flex-col gap-1 after:bg-white after:absolute relative after:[content:" "] after:h-full after:animate-fill-text'>
                            <p className='animate-opacity-text opacity-0'>
                                <span className='italic font-medium'>Not Your </span>{' '}
                                <span className='italic font-medium line-through text-gray-400'>Average</span> Frontend Developer.
                            </p>
                            <p className='animate-opacity-text opacity-0'>
                                As a skilled developer, I am passionate about transforming your{' '}
                                <span className='italic font-medium text-red-500'>vision</span> into{' '}
                                <span className='italic font-medium text-red-500'>innovative web applications</span> thru lines of code.
                            </p>
                        </div>
                        <div className='flex mt-6 gap-8 items-center after:bg-white after:absolute relative after:[content:" "] after:h-full after:animate-fill-text z-[100]'>
                            <PrimaryButton />
                            <a
                                href='/files/updated_resume.pdf'
                                target='_blank'
                                download
                                className='flex text-lg border-b border-b-white items-center gap-2 hover:scale-105 transition'
                            >
                                <span>Resume</span>
                                <LuDownload />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='fixed right-4 bottom-[calc(50%+28px)] sm:right-12 xl:right-[6vw] md:bottom-[6vw] z-[100]'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
