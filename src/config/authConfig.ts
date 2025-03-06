export const AUTH_CONFIG = {
  KAKAO: {
    CLIENT_ID: import.meta.env.VITE_KAKAO_CLIENT_ID,
    REDIRECT_URI: 'http://localhost:5173/auth/callback/kakao',
    AUTH_URL: 'https://kauth.kakao.com/oauth/authorize',
    TOKEN_URL: 'https://kauth.kakao.com/oauth/token',
  },
  NAVER: {
    CLIENT_ID: import.meta.env.VITE_NAVER_CLIENT_ID,
    CLIENT_SECRET: import.meta.env.VITE_NAVER_CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:5173/auth/callback/naver',
    AUTH_URL: 'https://nid.naver.com/oauth2.0/authorize',
    TOKEN_URL: 'https://nid.naver.com/oauth2.0/token',
  },
  GOOGLE: {
    CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    CLIENT_SECRET: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
    REDIRECT_URI: 'http://localhost:5173/auth/callback/google',
    AUTH_URL: 'https://accounts.google.com/o/oauth2/auth',
    TOKEN_URL: 'https://oauth2.googleapis.com/token',
    SCOPE: 'profile email', // 필요한 범위 추가
  },
}
