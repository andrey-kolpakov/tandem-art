import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    const currentIp = await prisma.currentIp.findMany()

    return NextResponse.json(currentIp)
}

export async function POST(req: NextRequest){
    const data = await req.json()

    // Получение IP
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || 'неизвестен'

    await prisma.currentIp.create({
        data: {
            ip: ip
        }
    })

    return NextResponse.json({ ip, data })
}