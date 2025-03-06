
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
  }),
  actions: {
    setToken(token: string) {
      this.accessToken = token;
      localStorage.setItem('accessToken', token);
    },
    clearToken() {
      this.accessToken = null;
      localStorage.removeItem('accessToken');
    },
    isAuthenticated() {
      return !!this.accessToken;
    },
  },
});
