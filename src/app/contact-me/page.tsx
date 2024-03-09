import ContactMeForm from '@/components/contact-me-form'
import SocialLinks from '@/components/social-links'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(2, 'Full name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
    email: z.string().email('Invalid email'),
    subject: z.string().min(4, 'Subject must be at least 4 characters').max(50, 'Subject must be less than 50 characters'),
    details: z.string().min(10, 'Details must be at least 10 characters').max(500, 'Details must be less than 500 characters'),
})

export const metadata = {
    title: 'Contact Me | Lino Escuyos',
    description:
        "Reach out to Lino Escuyos Jr. effortlessly through his contact page. Simply fill out the contact form provided to connect with this skilled frontend developer. Whether you have a question, project inquiry, or just want to say hello, he's just a click away",
}

const ContactUsPage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col container pt-[120px] pb-[24px] gap-14'>
            <header className='text-slate-200 text-5xl md:text-7xl lg:text-8xl px-[5%] gap-4 md:gap-0'>
                <h1>Contact Me</h1>
                <div className='flex gap-2 items-center justify-center w-full opacity-50'>
                    <div className='border-t border-gray-200 w-[175px] lg:w-[200px]'></div>
                    <p>Have A Project?</p>
                </div>
            </header>
            <div className='flex md:gap-4 gap-10 justify-between flex-col md:flex-row'>
                <ContactMeForm />
                <div className='flex flex-col w-[90%] mx-auto md:mx-0 md:w-[30%] gap-10 self-center'>
                    <p className='max-w-[300px] text-base md:text-lg text-slate-200/50'>
                        Tell me about your vision which challenges are you facing? What are your goals and expectations? What would success look like
                        and how much are you planning to spend to get there?
                    </p>
                    <SocialLinks className='flex-row justify-start items-start text-slate-200/50' />
                </div>
            </div>
        </div>
    )
}
export default ContactUsPage
