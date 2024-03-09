'use client'

import { Form, FormLabel, FormMessage } from '@/components/form'
import { Input } from '@/components/input'
import cn from '@/utils/cn'
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

export default function ContactMeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            details: '',
        },
    })

    const {
        formState: { isLoading, isSubmitting, isSubmitSuccessful, errors },
    } = form

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)

        const data = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (data.status === 200) {
            form.reset()
            form.clearErrors()
            return
        } else {
            console.log(await data.json())
            form.setError('root', { message: 'Something went wrong. Please try again!' })
            alert('Something went wrong. Please try again later!')
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='max-w-[600px] w-[90%] mx-auto md:mx-0 md:w-1/2 text-slate-100 flex-col gap-4 flex'
            >
                <div className='flex space-y-2 flex-col'>
                    <FormLabel htmlFor='name'>Your Name</FormLabel>
                    <Input placeholder='Your Name' id='name' {...form.register('name')} className='h-12 bg-black' />
                    <FormMessage className='text-red-500'>{errors.name?.message}</FormMessage>
                </div>
                <div className='flex space-y-2 flex-col'>
                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                    <Input placeholder='Your Email Address' id='email' {...form.register('email')} className='h-12 bg-black' />
                    <FormMessage className='text-red-500'>{errors.email?.message}</FormMessage>
                </div>
                <div className='flex space-y-2 flex-col'>
                    <FormLabel htmlFor='subject'>Subject</FormLabel>
                    <Input placeholder='Subject' id='subject' {...form.register('subject')} className='h-12 bg-black' />
                    <FormMessage className='text-red-500'>{errors.subject?.message}</FormMessage>
                </div>
                <div className='flex space-y-2 flex-col'>
                    <FormLabel htmlFor='details'>Project Details</FormLabel>
                    <textarea
                        id='details'
                        placeholder='Project Details'
                        {...form.register('details')}
                        className='resize-none h-[120px] pt-2 bg-black flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                    />
                    <FormMessage className='text-red-500'>{errors.details?.message}</FormMessage>
                </div>
                <button
                    disabled={!!isSubmitting || !!isLoading}
                    type='submit'
                    className={cn(
                        'h-12 w-full rounded-md bg-slate-200/75 hover:bg-slate-200 transition font-medium text-black disabled:opacity-50 disabled:bg-slate-200/75 disabled:cursor-not-allowed',
                        isSubmitSuccessful && 'pointer-events-none'
                    )}
                >
                    {isLoading || isSubmitting ? (
                        <LuLoader className='mx-auto w-6 h-6 animate-spin [animation-duration:1.5s]' />
                    ) : isSubmitSuccessful ? (
                        'Sent ✅'
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </Form>
    )
}
