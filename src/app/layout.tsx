import GrainCanvas from '@/components/grain-canvas'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const fira_sans = Fira_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '400', '500', '700', '900'],
    variable: '--font-fira-sans',
})

export const metadata: Metadata = {
    title: 'Lino Escuyos | Frontend Developer',
    description:
        "Lino Escuyos Jr. — Frontend Developer specializing in React, Next.js, TypeScript, and modern UI. Building clean, fast, and impactful digital experiences.",
}

export const runtime = 'edge'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${fira_sans.className} ${fira_sans.variable} bg-black text-white`}>
                <GrainCanvas />
                <Navbar />
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
