import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

const SECRET_KEY = process.env.ESP_SECRET_KEY // например, "091011"

function extractSecretFromHeader(req: NextRequest) {
    const authHeader = req.headers.get('authorization')
    if (!authHeader) return null

    const [scheme, token] = authHeader.split(' ')
    if (scheme !== 'Bearer' || !token) return null

    return token
}

export async function GET(req: NextRequest) {
    const providedSecret = extractSecretFromHeader(req)

    if (providedSecret !== SECRET_KEY) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const currentIp = await prisma.currentIp.findFirst()
    return NextResponse.json(currentIp)
}

export async function POST(req: NextRequest) {
    const providedSecret = extractSecretFromHeader(req)

    if (providedSecret !== SECRET_KEY) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || 'неизвестен'

    await prisma.currentIp.upsert({
        where: { id: 1 },
        update: { ip },
        create: { id: 1, ip }
    })

    return NextResponse.json({ ip })
}
