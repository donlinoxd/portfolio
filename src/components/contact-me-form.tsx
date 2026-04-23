'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LuLoader } from 'react-icons/lu'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(2, 'Full name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
    email: z.string().email('Invalid email'),
    subject: z.string().min(4, 'Subject must be at least 4 characters').max(50, 'Subject must be less than 50 characters'),
    details: z.string().min(10, 'Details must be at least 10 characters').max(500, 'Details must be less than 500 characters'),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactMeForm() {
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        setError,
        formState: { isLoading, isSubmitting, isSubmitSuccessful, errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '', email: '', subject: '', details: '' },
    })

    const onSubmit = async (values: FormValues) => {
        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.status === 200) {
            reset()
            clearErrors()
        } else {
            setError('root', { message: 'Something went wrong. Please try again!' })
        }
    }

    const inputClass =
        'w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors text-sm'

    const labelClass = 'block text-xs uppercase tracking-widest text-white/60 mb-2'

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
                <label className={labelClass}>Name</label>
                <input {...register('name')} placeholder='Your name' className={inputClass} />
                {errors.name && <p className='text-white/50 text-xs mt-1 uppercase tracking-widest'>{errors.name.message}</p>}
            </div>

            <div>
                <label className={labelClass}>Email</label>
                <input {...register('email')} type='email' placeholder='your.email@example.com' className={inputClass} />
                {errors.email && <p className='text-white/50 text-xs mt-1 uppercase tracking-widest'>{errors.email.message}</p>}
            </div>

            <div>
                <label className={labelClass}>Subject</label>
                <input {...register('subject')} placeholder='Subject' className={inputClass} />
                {errors.subject && <p className='text-white/50 text-xs mt-1 uppercase tracking-widest'>{errors.subject.message}</p>}
            </div>

            <div>
                <label className={labelClass}>Message</label>
                <textarea
                    {...register('details')}
                    rows={5}
                    placeholder='Tell me about your project...'
                    className={`${inputClass} resize-none`}
                />
                {errors.details && <p className='text-white/50 text-xs mt-1 uppercase tracking-widest'>{errors.details.message}</p>}
            </div>

            {errors.root && <p className='text-white/50 text-xs uppercase tracking-widest'>{errors.root.message}</p>}

            <button
                type='submit'
                disabled={isSubmitting || isLoading}
                className='w-full uppercase tracking-widest bg-white text-black px-6 py-3 text-sm hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
                {isLoading || isSubmitting ? (
                    <LuLoader className='w-5 h-5 animate-spin' />
                ) : isSubmitSuccessful ? (
                    'Message Sent ✓'
                ) : (
                    'Send Message'
                )}
            </button>
        </form>
    )
}
