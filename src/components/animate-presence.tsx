'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import PageTransition from './page-transition'

export default function AnimatePresenceWrapper({ children }: PropsWithChildren) {
    const pathname = usePathname()

    return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div key={pathname}>
                {children}
                <PageTransition />
            </motion.div>
        </AnimatePresence>
    )
}
