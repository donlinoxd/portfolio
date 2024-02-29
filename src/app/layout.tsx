import AnimatePresenceWrapper from '@/components/animate-presence'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const fira_sans = Fira_Sans({ subsets: ['latin'], weight: ['100', '200', '400', '500', '700', '900'], variable: '--font-fira-sans' })

export const metadata: Metadata = {
    title: 'Portfolio | Lino Escuyos',
    description:
        "Explore my work at Lino Escuyos | Portfolio. I'm a frontend developer with experience in JavaScript, TypeScript, React, Next.js, and other UI libraries. I've also dabbled in backend development using Node.js, Express, GraphQL, Firebase, tRPC, MongoDB, and more. Check out my projects for a taste of my knack for creating user-friendly and dynamic web experiences.",
}

export const runtime = 'edge'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className='scrollbar'>
            <body className={fira_sans.className + ' bg-black text-white [&::-webkikt-scrollbar]:hidden ' + fira_sans.variable}>
                <Navbar />
                <AnimatePresenceWrapper>{children}</AnimatePresenceWrapper>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
