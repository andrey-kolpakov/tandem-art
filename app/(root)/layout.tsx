import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../globals.scss'

import {Header, Popup, Footer} from '@/components/client'

const inter = Inter({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Tandem Art',
    description: 'Типография',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Popup/>

        <Header/>

        {children}

        <Footer/>
        </body>
        </html>
    )
}
