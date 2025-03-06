import { defineStore } from 'pinia'
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import axiosApi from '@/config/axiosConfig'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('accessToken')) // 새로고침해도 유지
  const userId = ref<string | null>(localStorage.getItem('userId')) // 새로고침해도 유지

  // 로그인 함수
  const login = async (email: string, password: string) => {
    try {
      const response = await axiosApi.post('/login', { email, password })

      if (response.data.token && response.data.user._id) {
        token.value = response.data.token
        userId.value = response.data.user._id


        localStorage.setItem('accessToken', token.value) // localStorage에 저장
        localStorage.setItem('userId', userId.value) // localStorage에 저장

        message.success('로그인 성공!')
        return true
      } else {
        message.error('로그인 실패! 다시 시도해주세요.')
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      message.error('로그인 실패! 다시 시도해주세요.')
      return false
    }
  }

  // 로그아웃 함수
  const logout = () => {
    token.value = null
    userId.value = null
    localStorage.removeItem('accessToken') // 토큰 삭제
    localStorage.removeItem('userId') // userId 삭제
    message.success('로그아웃 되었습니다.')
  }

  return { token, userId, login, logout }
})
