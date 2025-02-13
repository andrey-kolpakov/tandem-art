import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../globals.scss'

import {Header, Popup, Footer} from '@/components/client/index'

const inter = Inter({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Sample App',
    description: 'Sample description',
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
