'use client'

import cn from '@/utils/cn'
import { MotionProps, Variants, motion } from 'framer-motion'
import Link from 'next/link'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 1 } },
}

const socialItem: Variants = {
    hidden: { opacity: 0, x: 48 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, duration: 0.5 } },
}

export default function SocialLinks({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & MotionProps) {
    return (
        <motion.div
            key='social-links'
            initial='hidden'
            animate='show'
            variants={container}
            className={cn('flex flex-col text-2xl sm:text-3xl md:text-4xl gap-8 text-white', className)}
            {...props}
        >
            <motion.div key='1' variants={socialItem}>
                <Link href='https://github.com/donlinoxd?tab=repositories' target='_blank'>
                    <BsGithub className=' hover:text-[#24292e] cursor-pointer hover:scale-150 transition duration-500' />
                </Link>
            </motion.div>
            <motion.div key='2' variants={socialItem}>
                <Link href='https://www.linkedin.com/in/zenoworks/' target='_blank'>
                    <BsLinkedin className=' hover:text-[#0077b5] cursor-pointer hover:scale-150 transition duration-500' />
                </Link>
            </motion.div>
            <motion.div key='3' variants={socialItem}>
                <Link href='https://www.facebook.com/Don.Lino.ix/' target='_blank'>
                    <BsFacebook className=' hover:text-[#316FF6] cursor-pointer hover:scale-150 transition duration-500' />
                </Link>
            </motion.div>
            <motion.div key='4' variants={socialItem}>
                <Link href='https://www.facebook.com/Don.Lino.ix/' target='_blank'>
                    <BsTwitter className=' hover:text-[#1DA1F2] cursor-pointer hover:scale-150 transition duration-500' />
                </Link>
            </motion.div>
        </motion.div>
    )
}
