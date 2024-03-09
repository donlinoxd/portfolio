import { NextRequest } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const bodySchema = z.object({
    name: z.string().min(2, 'Full name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
    email: z.string().email('Invalid email'),
    subject: z.string().min(4, 'Subject must be at least 4 characters').max(50, 'Subject must be less than 50 characters'),
    details: z.string().min(10, 'Details must be at least 10 characters').max(500, 'Details must be less than 500 characters'),
})
export async function POST(req: NextRequest) {
    const origin = req.nextUrl.origin

    const body = bodySchema.parse(await req.json())

    if (!body) Response.json({ error: 'Invalid request' }, { status: 400 })

    const { name, email, subject, details } = body

    console.log('sending email')
    const template = await fetch(`${origin}/files/template.html`).then((res) => res.text())
    const html = template.replaceAll('{{name}}', name).replace('{{email}}', email).replace('{{subject}}', subject).replace('{{details}}', details)

    const { data, error } = await resend.emails.send({
        from: 'no-reply@linoescuyos.com',
        to: ['don.lino.xd@gmail.com', 'zeno.works26@gmail.com', email],
        subject,
        html,
    })

    if (error) {
        console.log('errror', error)
        return Response.json({ error: error }, { status: 400 })
    }

    console.log({ success: true, data })
    return Response.json({ data: data }, { status: 200 })
}
