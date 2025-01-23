import axios from 'axios'
import CryptoJS from 'crypto-js'

const CAPIToken = process.env.REACT_APP_CAPI_TOKEN
const pixelID = process.env.REACT_APP_PIXEL_ID
const APIVersion = process.env.REACT_APP_API_VERSION

export default function handleCapi(nameState, phoneState, fbc) {
    const fbp = document.cookie
        .split('; ')
        .find((row) => row.startsWith('_fbp'))
        ?.split('=')[1]

        console.log(document.cookie)

    // CAPI META
    const hashedName = CryptoJS.SHA256(nameState.toLowerCase().trim()).toString()
    const hashedPhone = CryptoJS.SHA256(phoneState.replace(/\D/g, '')).toString() // Удаляем все нецифровые символы для телефона
    const data = {
        data: [
            {
                event_name: 'Lead',
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                event_id: Math.ceil(Math.random() * 10000),
                user_data: {
                    fn: hashedName,
                    ph: hashedPhone,
                    fbc: `fb.1.${Date.now()}.${fbc}`,
                    fbp: fbp || null,
                },
            },
        ],
    }

    console.log(data)
    // const CAPIURL = `https://graph.facebook.com/v20.0/${pixelID}/events?access_token=${CAPIToken}`
    // console.log(CAPIURL)
    // axios.post(CAPIURL, data).then((response) => console.log(response)).catch((error) => console.error(error))
}
