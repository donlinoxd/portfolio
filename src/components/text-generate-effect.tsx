'use client'
import cn from '@/utils/cn'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
    const [scope, animate] = useAnimate()
    let wordsArray = words.split(' ')
    useEffect(() => {
        if (window) {
            setTimeout(() => {
                animate(
                    'span',
                    {
                        opacity: 1,
                    },
                    {
                        duration: 2,
                        delay: stagger(0.2),
                    }
                )
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current])

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className='text-white opacity-0'>
                            {word}{' '}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }

    return (
        <div className={cn('font-bold', className)}>
            <div className='mt-4'>
                <div className=' dark:text-white text-black text-xl md:text-lg leading-snug tracking-wide'>{renderWords()}</div>
            </div>
        </div>
    )
}
