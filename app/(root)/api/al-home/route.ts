import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

const SECRET_KEY = process.env.ESP_SECRET_KEY // храним в .env, конечно

export async function GET(req: NextRequest) {
    const data = await req.json()

    const providedSecret = data.secret
    if (providedSecret !== SECRET_KEY) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const currentIp = await prisma.currentIp.findFirst()

    return NextResponse.json(currentIp)
}

export async function POST(req: NextRequest){
    const data = await req.json()

    const providedSecret = data.secret
    if (providedSecret !== SECRET_KEY) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Получение IP
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || 'неизвестен'

    await prisma.currentIp.upsert({
        where: { id: 1 }, // предполагаем, что у тебя в таблице есть запись с id = 1
        update: {
            ip: ip,
        },
        create: {
            id: 1, // если нет — создаём с id = 1
            ip: ip,
        }
    })

    return NextResponse.json({ ip, data })
}