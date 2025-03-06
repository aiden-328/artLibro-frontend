
import { AUTH_CONFIG } from '@/config/authConfig'
import axios from 'axios'

type AuthConfig = {
  CLIENT_ID: string
  CLIENT_SECRET?: string
  API_KEY?: string
  REDIRECT_URI: string
  AUTH_URL: string
  TOKEN_URL: string
  SCOPE: string
}

type AuthConfigMap = {
  [key: string]: AuthConfig
}

export const getSocialToken = async (provider: string, code: string) => {
  try {
    const config: AuthConfig = (AUTH_CONFIG as AuthConfigMap)[provider.toUpperCase()]

    const params: any = {
      grant_type: 'authorization_code',
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      redirect_uri: config.REDIRECT_URI,
      code,
    }

    const response = await axios.post(config.TOKEN_URL, null, { params })

    if (!response || !response.data) {
      throw new Error('Invalid response from server')
    }

    console.log('Response data:', response.data) // 응답 데이터 출력

    return response.data
  } catch (error) {
    console.error(`Error during ${provider} login:`, error)
    throw error
  }
}
