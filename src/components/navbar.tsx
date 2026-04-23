'use client'

import cn from '@/utils/cn'
import { useEffect, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

const links = [
    { text: 'Work', href: '#work' },
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY >= 50)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5',
                scrolled && 'bg-black/90 backdrop-blur-sm py-3'
            )}
        >
            <div className='container flex items-center justify-between'>
                <a href='#hero' className='text-white font-bold text-2xl tracking-tighter'>
                    LINO<span className='text-neutral-400'>.</span>
                </a>

                <nav className='hidden md:flex items-center space-x-8'>
                    {links.map(({ text, href }) => (
                        <a
                            key={text}
                            href={href}
                            className='text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest'
                        >
                            {text}
                        </a>
                    ))}
                </nav>

                <div className='hidden md:block'>
                    <a
                        href='#contact'
                        className='border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors'
                    >
                        Contact
                    </a>
                </div>

                <button className='md:hidden text-white' onClick={() => setMobileOpen(!mobileOpen)} aria-label='Toggle menu'>
                    {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className='md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 mt-2'>
                    <div className='container py-6 flex flex-col gap-6'>
                        {links.map(({ text, href }) => (
                            <a
                                key={text}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className='text-neutral-400 hover:text-white text-sm uppercase tracking-widest'
                            >
                                {text}
                            </a>
                        ))}
                        <a
                            href='#contact'
                            onClick={() => setMobileOpen(false)}
                            className='border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center'
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
