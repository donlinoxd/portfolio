'use client'

import FadeIn from '@/components/fade-in'
import ContactMeForm from '@/components/contact-me-form'
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'
import { LuArrowRight, LuDownload, LuCode, LuPenTool, LuLayoutDashboard, LuZap } from 'react-icons/lu'

const works = [
    {
        title: 'METIME HEALING',
        category: 'UI/UX • Web Application',
        year: '2024',
        url: 'https://www.metimehealing.com/',
        image: '/images/metime_macbook.svg',
    },
    {
        title: 'DULLES GLASS',
        category: 'Frontend • Ecommerce',
        year: '2023',
        url: 'https://dullesglass.com/',
        image: '/images/dullesglass_pcmac.svg',
    },
    {
        title: 'ZENO FILMS',
        category: 'UI/UX • Web App',
        year: '2023',
        url: 'https://zenofilms.vercel.app/',
        image: '/images/zeno_films_laptop.svg',
    },
    {
        title: 'RANKEN NOODLE',
        category: 'Frontend • Restaurant',
        year: '2022',
        url: 'https://rankennoodlehouse.com/',
        image: '/images/ranken_noodles_ipad.svg',
    },
    {
        title: 'SUNNY AGENCY',
        category: 'UI/UX • Agency',
        year: '2022',
        url: 'https://sunnyagencyworks.vercel.app/',
        image: '/images/sunny_agency_tablet.png',
    },
]

const experiences = [
    {
        num: '01',
        title: 'React Frontend Developer',
        company: 'Uptile, LLC',
        duration: '2022 — Present',
        description:
            "Building and maintaining vital parts of Uptile's website end-to-end. Collaborating closely with developers, designers, and product managers to ensure the highest standards of accessibility and performance.",
        stack: ['TypeScript', 'React', 'Tailwind CSS'],
    },
    {
        num: '02',
        title: 'Web Developer',
        company: 'Eldorado LLC',
        duration: '2022 — 2023',
        description:
            'Specialized in reusable components, responsive design, API integration, and data visualizations. Optimized website performance for faster load times and improved SEO rankings.',
        stack: ['TypeScript', 'Next.js', 'Chakra UI', 'Storybook'],
    },
    {
        num: '03',
        title: 'Web Developer',
        company: 'My Phillie Wireless',
        duration: '2021 — 2022',
        description:
            'Built a full web application as part of a 3-developer team. Created the frontend with React and Redux while contributing to backend development with Node.js and Express.',
        stack: ['TypeScript', 'Node.js', 'Express.js'],
    },
]

const features = [
    {
        icon: LuCode,
        title: 'Frontend Development',
        description: 'Building clean, performant interfaces with React, Next.js, and TypeScript. Every component is purposeful and reusable.',
    },
    {
        icon: LuPenTool,
        title: 'UI/UX Design',
        description: 'Designing user experiences that are minimal and impactful. Translating wireframes and Figma designs into pixel-perfect UIs.',
    },
    {
        icon: LuLayoutDashboard,
        title: 'Responsive Layout',
        description: 'Every build works flawlessly across all screen sizes — from mobile to widescreen — without compromise.',
    },
    {
        icon: LuZap,
        title: 'Performance Focus',
        description: 'Optimized builds with fast load times, efficient rendering, and clean code that scales without bloat.',
    },
]

function SectionLabel({ label }: { label: string }) {
    return (
        <div className='flex items-center gap-4 mb-6'>
            <div className='h-px w-12 bg-white/40' />
            <div className='text-xs uppercase tracking-widest text-white/80'>{label}</div>
        </div>
    )
}

export default function Home() {
    return (
        <div className='overflow-x-hidden'>
            {/* ─── HERO ─────────────────────────────────────────── */}
            <section
                id='hero'
                className='relative flex items-center px-4 py-[100px] sm:py-[120px] min-h-screen overflow-hidden'
            >
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)]' />

                <div className='container relative z-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                        {/* Left */}
                        <div>
                            <FadeIn delay={0.1}>
                                <div className='inline-block border border-neutral-800 px-3 py-1 text-xs uppercase tracking-widest text-neutral-400 mb-6'>
                                    Frontend Developer
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h1 className='text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-6'>
                                    <span className='block'>LINO</span>
                                    <span className='block text-neutral-400'>ESCUYOS</span>
                                    <span className='block'>JR.</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p className='text-neutral-400 mb-8 max-w-md text-lg leading-relaxed'>
                                    I build minimal, fast, and impactful web experiences. Raw code, clean design, straight to the point.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <a
                                        href='#work'
                                        className='border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2'
                                    >
                                        View My Work <LuArrowRight className='w-4 h-4' />
                                    </a>
                                    <a
                                        href='/files/updated_resume.pdf'
                                        target='_blank'
                                        download
                                        className='border border-neutral-700 px-8 py-3 text-sm uppercase tracking-widest text-neutral-400 hover:border-neutral-500 hover:text-white transition-colors flex items-center justify-center gap-2'
                                    >
                                        Resume <LuDownload className='w-4 h-4' />
                                    </a>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right — geometric art */}
                        <FadeIn delay={0.3} className='relative hidden md:block'>
                            <div className='relative aspect-square'>
                                {/* Shadow box */}
                                <div className='absolute -bottom-8 -right-8 w-2/3 h-2/3 border border-neutral-800 bg-neutral-950 -z-10' />
                                {/* Main box */}
                                <div className='aspect-square relative overflow-hidden border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-950'>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <div className='w-3/4 h-3/4 relative'>
                                            <div className='absolute top-0 left-0 w-full h-px bg-white' />
                                            <div className='absolute bottom-0 right-0 w-full h-px bg-white' />
                                            <div className='absolute top-0 right-0 h-full w-px bg-white' />
                                            <div className='absolute bottom-0 left-0 h-full w-px bg-white' />
                                            <div className='absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-neutral-600 flex items-center justify-center'>
                                                <div className='w-3/4 h-3/4 bg-neutral-900 flex items-center justify-center'>
                                                    <div className='w-1/2 h-1/2 bg-white' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Scroll indicator */}
                    <FadeIn delay={0.6} className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                        <div className='flex items-center gap-8 border border-neutral-800 px-8 py-4'>
                            <div className='text-xs uppercase tracking-widest text-neutral-400'>Scroll</div>
                            <div className='h-px w-10 bg-neutral-700' />
                            <div className='text-xs uppercase tracking-widest text-neutral-400'>Discover</div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ─── ABOUT / FEATURES ──────────────────────────────── */}
            <section id='about' className='py-24 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900'>
                {/* Decorative blurs */}
                <div className='absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none' />
                <div className='absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl pointer-events-none' />

                <div className='container relative z-10'>
                    <FadeIn className='mb-16'>
                        <SectionLabel label='My Approach' />
                        <h2 className='text-4xl md:text-5xl font-bold tracking-tighter text-white'>
                            Clean Code.
                            <br />
                            <span className='text-white/70'>Maximum Impact.</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                            {features.map(({ icon: Icon, title, description }) => (
                                <div
                                    key={title}
                                    className='border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group rounded-sm'
                                >
                                    <div className='mb-6 text-white/80 group-hover:text-white transition-colors'>
                                        <div className='bg-white/10 p-3 inline-block rounded-sm group-hover:bg-white/20 transition-all duration-300'>
                                            <Icon className='w-6 h-6' />
                                        </div>
                                    </div>
                                    <h3 className='text-xl font-bold mb-4 text-white'>{title}</h3>
                                    <p className='text-white/70 group-hover:text-white/90 transition-colors text-sm leading-relaxed'>{description}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ─── WORKS ─────────────────────────────────────────── */}
            <section id='work' className='py-24 relative overflow-hidden'>
                {/* Decorative corners */}
                <div className='absolute top-40 right-0 w-32 h-32 border border-white/10 pointer-events-none' />
                <div className='absolute bottom-20 left-0 w-48 h-48 border border-white/5 pointer-events-none' />

                <div className='container relative z-10'>
                    <FadeIn className='mb-16'>
                        <SectionLabel label='Selected Work' />
                        <div className='flex flex-col md:flex-row md:items-end justify-between'>
                            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white'>
                                My Latest
                                <br />
                                <span className='text-white/70'>Projects</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {works.map(({ title, category, year, url, image }) => (
                            <FadeIn key={title}>
                                <a href={url} target='_blank' rel='noreferrer' className='group cursor-pointer block'>
                                    <div className='relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300'>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={image}
                                            alt={title}
                                            className='w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors' />
                                        <div className='absolute top-4 right-4'>
                                            <div className='inline-block bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20'>
                                                {year}
                                            </div>
                                        </div>
                                        <div className='absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                            <div className='text-xs uppercase tracking-widest text-white/80'>View Project</div>
                                        </div>
                                    </div>
                                    <h3 className='text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300'>
                                        {title}
                                    </h3>
                                    <p className='text-white/70 group-hover:text-white/90 transition-colors text-sm'>{category}</p>
                                    <div className='h-px w-0 bg-white group-hover:w-20 transition-all duration-300 mt-2' />
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EXPERIENCE / SKILLS ───────────────────────────── */}
            <section id='skills' className='py-24 relative overflow-hidden bg-[#0a0a0a]'>
                {/* Decorative corners */}
                <div className='absolute top-40 right-20 w-32 h-32 border border-white/10 pointer-events-none' />
                <div className='absolute bottom-60 left-20 w-40 h-40 border border-white/5 pointer-events-none' />

                <div className='container relative z-10'>
                    <FadeIn className='mb-16'>
                        <SectionLabel label='Experience' />
                        <h2 className='text-4xl md:text-5xl font-bold tracking-tighter text-white'>
                            Where I&apos;ve
                            <br />
                            <span className='text-white/70'>Worked</span>
                        </h2>
                    </FadeIn>

                    <div className='relative'>
                        {/* Vertical line */}
                        <div className='absolute left-[39px] top-0 bottom-0 w-px bg-white/20 md:left-1/2' />

                        {experiences.map(({ num, title, company, duration, description, stack }, idx) => {
                            const isEven = idx % 2 === 0
                            return (
                                <FadeIn key={num} delay={idx * 0.1} className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Text side */}
                                    <div className={`flex-1 pl-24 md:pl-0 ${isEven ? 'md:text-right' : ''}`}>
                                        <div className={`text-5xl md:text-7xl font-bold text-white/20 mb-4 ${isEven ? 'md:text-right' : ''}`}>
                                            {num}
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-1 text-white ${isEven ? 'md:text-right' : ''}`}>{title}</h3>
                                        <p className={`text-white/50 text-sm uppercase tracking-widest mb-3 ${isEven ? 'md:text-right' : ''}`}>
                                            {company} · {duration}
                                        </p>
                                        <p className={`text-white/75 max-w-sm leading-relaxed ${isEven ? 'md:ml-auto' : ''}`}>{description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                                            {stack.map((s) => (
                                                <span key={s} className='text-xs border border-white/20 px-3 py-1 text-white/60 uppercase tracking-widest'>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Numbered box */}
                                    <div className='relative flex items-center justify-center z-10 flex-shrink-0 absolute-vertical-center md:static'>
                                        <div className='w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a]'>
                                            <div className='text-xl font-bold text-white'>{num}</div>
                                        </div>
                                    </div>

                                    {/* Horizontal line (desktop) */}
                                    <div className='flex-1 hidden md:block'>
                                        <div className='h-px w-full bg-white/20' />
                                    </div>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── CONTACT ───────────────────────────────────────── */}
            <section id='contact' className='py-24 relative overflow-hidden'>
                <div className='absolute top-40 right-20 w-56 h-56 border border-white/5 pointer-events-none' />
                <div className='absolute bottom-20 left-10 w-32 h-32 border-2 border-white/10 pointer-events-none' />

                <div className='container relative z-10'>
                    <FadeIn className='mb-16'>
                        <SectionLabel label='Contact' />
                        <h2 className='text-4xl md:text-5xl font-bold tracking-tighter text-white'>
                            Let&apos;s Work
                            <br />
                            <span className='text-white/70'>Together</span>
                        </h2>
                    </FadeIn>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <FadeIn delay={0.1}>
                            <ContactMeForm />
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className='border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 h-full'>
                                <h3 className='text-2xl font-bold mb-6 text-white'>Contact Information</h3>
                                <div className='space-y-8'>
                                    <div>
                                        <div className='text-sm uppercase tracking-widest text-white/50 mb-1'>Email</div>
                                        <a href='mailto:donlinoxd@gmail.com' className='text-white hover:text-white/70 transition-colors'>
                                            donlinoxd@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <div className='text-sm uppercase tracking-widest text-white/50 mb-1'>Based In</div>
                                        <p className='text-white/80'>Philippines</p>
                                    </div>
                                    <div>
                                        <div className='text-sm uppercase tracking-widest text-white/50 mb-3'>Social</div>
                                        <div className='flex gap-4'>
                                            <a
                                                href='https://github.com/donlinoxd'
                                                target='_blank'
                                                rel='noreferrer'
                                                className='bg-white/10 p-3 hover:bg-white/20 transition-colors group'
                                                aria-label='GitHub'
                                            >
                                                <BsGithub className='w-5 h-5 text-white/70 group-hover:text-white transition-colors' />
                                            </a>
                                            <a
                                                href='https://www.linkedin.com/in/zenoworks/'
                                                target='_blank'
                                                rel='noreferrer'
                                                className='bg-white/10 p-3 hover:bg-white/20 transition-colors group'
                                                aria-label='LinkedIn'
                                            >
                                                <BsLinkedin className='w-5 h-5 text-white/70 group-hover:text-white transition-colors' />
                                            </a>
                                            <a
                                                href='https://www.facebook.com/Don.Lino.ix/'
                                                target='_blank'
                                                rel='noreferrer'
                                                className='bg-white/10 p-3 hover:bg-white/20 transition-colors group'
                                                aria-label='Facebook'
                                            >
                                                <BsFacebook className='w-5 h-5 text-white/70 group-hover:text-white transition-colors' />
                                            </a>
                                            <a
                                                href='https://twitter.com/'
                                                target='_blank'
                                                rel='noreferrer'
                                                className='bg-white/10 p-3 hover:bg-white/20 transition-colors group'
                                                aria-label='Twitter'
                                            >
                                                <BsTwitter className='w-5 h-5 text-white/70 group-hover:text-white transition-colors' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── FOOTER ────────────────────────────────────────── */}
            <footer className='border-t border-white/10 py-8'>
                <div className='container flex flex-col md:flex-row items-center justify-between gap-4'>
                    <a href='#hero' className='text-white font-bold text-xl tracking-tighter'>
                        LINO<span className='text-neutral-400'>.</span>
                    </a>
                    <p className='text-white/40 text-sm uppercase tracking-widest'>
                        © {new Date().getFullYear()} Lino Escuyos Jr. All rights reserved.
                    </p>
                    <div className='flex gap-6'>
                        <a href='#work' className='text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors'>Work</a>
                        <a href='#about' className='text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors'>About</a>
                        <a href='#contact' className='text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors'>Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
