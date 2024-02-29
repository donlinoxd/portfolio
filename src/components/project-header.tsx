'use client'

import { motion } from 'framer-motion'

export default function ProjectHeader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.75 } }}
            className='h-screen w-full flex justify-center items-center flex-col gap-2 text-center'
        >
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-medium'>PROJECT SHOWCASE</h1>
            <p className='text-lg md:text-xl lg:text-2xl text-white/80'>
                From sleek designs to interactive features, explore my creative work in web development
            </p>
        </motion.div>
    )
}
