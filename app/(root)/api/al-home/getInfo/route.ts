// /app/api/al-home/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const reqBody = await req.json()

    const utterance = reqBody.request.original_utterance.toLowerCase().trim()
    const version = reqBody.version
    const session = reqBody.session

    let responseText = ''
    let endSession = false

    if (session.new || ['привет', 'старт'].includes(utterance)) {
        responseText = 'Привет, я управляю вентилятором. Скажи "включи" или "выключи".'
    } else if (utterance.includes('включи')) {
        // Здесь логика запроса на твой API включения вентилятора
        responseText = 'Вентилятор включен.'
    } else if (utterance.includes('выключи')) {
        // Здесь логика выключения вентилятора
        responseText = 'Вентилятор выключен.'
    } else if (['пока', 'стоп'].includes(utterance)) {
        responseText = 'До свидания!'
        endSession = true
    } else {
        responseText = 'Не понял команду. Скажи "включи" или "выключи".'
    }

    return NextResponse.json({
        version,
        session,
        response: {
            text: responseText,
            tts: responseText,
            end_session: endSession,
        },
    })
}
