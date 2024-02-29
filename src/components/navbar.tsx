'use client'

import cn from '@/utils/cn'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet'

const container: Variants = {
    hidden: { opacity: 0, y: '-100%' },
    show: { opacity: 1, y: '0', transition: { delay: 0.75 } },
}

const navWrapper: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.75 } },
}

const navItem: Variants = {
    hidden: { opacity: 0, y: -32 },
    show: { opacity: 1, y: 0 },
}

const links = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'Works',
        href: '/works',
    },
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Blogs',
        href: '/blogs',
    },
]

export default function Navbar() {
    const pathname = usePathname()

    const [scrolled, setScrolled] = useState(false)
    const [openSheet, setOpenSheet] = useState(false)

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', (e) => {
                if (scrollY >= 250) setScrolled(true)
                else setScrolled(false)
            })
        }
    }, [])

    useEffect(() => {
        setOpenSheet(false)
    }, [pathname])

    return (
        <div
            className={cn(
                'fixed left-0 top-0 z-[99] flex h-[60px] w-full bg-transparent transition-all duration-500 lg:h-[90px]',
                scrolled && 'h-[32px] bg-black lg:h-[48px]'
            )}
        >
            <motion.div initial='hidden' animate='show' variants={container} className='container flex justify-between items-center'>
                <Link href='/' className='relative h-full aspect-square'>
                    <Image
                        src='/images/logo_dark.png'
                        alt='Logo dark'
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </Link>
                <motion.ul className='md:flex gap-10 text-lg hidden' variants={navWrapper} initial='hidden' animate='show'>
                    {links.map(({ text, href }) => (
                        <motion.li
                            variants={navItem}
                            key={text}
                            className={cn(
                                'after:transition-all after:hover:w-full relative py-2 after:[content:" "] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-white after:rounded-full',
                                pathname === href ? 'after:w-full' : 'after:w-0'
                            )}
                        >
                            <Link href={href} className='py-2'>
                                {text}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
                <Sheet onOpenChange={(open) => setOpenSheet(open)} open={openSheet}>
                    <SheetTrigger className='flex md:hidden'>
                        <MdMenu className='-scale-y-150 scale-x-125' />
                    </SheetTrigger>
                    <SheetContent className='z-[200] border-l-white/10 bg-black text-white'>
                        <SheetHeader className='pt-10'>
                            <SheetTitle></SheetTitle>
                            <SheetDescription asChild>
                                <ul className='flex flex-col items-start gap-8'>
                                    {links.map(({ text, href }) => (
                                        <li key={text} className={cn('pl-4', pathname === href && 'border-brand-primary border-l-2')}>
                                            <Link className='text-white' href={href}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </motion.div>
        </div>
    )
}
