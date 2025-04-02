import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {

}

export async function POST(req: NextRequest){
    const data = await req.json()

    // Получение IP
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || 'неизвестен'

    console.log('IP клиента:', ip)
    console.log('Тело запроса:', data)

    return NextResponse.json({ ip, data })
}