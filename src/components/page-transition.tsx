'use client'
import { motion } from 'framer-motion'

export default function PageTransition() {
    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[300] bg-white'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[200] bg-black'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-red-500'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    )
}
