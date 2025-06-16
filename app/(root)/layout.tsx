import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google';
import '../globals.scss'

import {Header, Popup, Footer, SocialButtonsColumn} from '@/components/client'

const inter = Inter({
    subsets: ['latin'],
})
const robotoCondensed = Roboto_Condensed({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

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


        <SocialButtonsColumn/>
        <Footer />
        </body>
        </html>
    )
}
