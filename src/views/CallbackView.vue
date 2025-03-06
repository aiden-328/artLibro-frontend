
<script lang="ts" setup>

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSocialToken } from "@/services/authService";
import { useAuthStore } from "@/stores/auth";
import { message } from "ant-design-vue";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore()

onMounted(async () => {
  const provider = route.params.provider as string;
  const code = route.query.code as string;

  console.log("Provider:", provider);
  console.log("Code:", code);

  if (!code) {
    console.error("Authorization code not found");
    return;
  }

  try {
    const token = await getSocialToken(provider, code);

    localStorage.setItem("accessToken", token.access_token); // access_token으로 변경
    authStore.setToken(token.access_token); // access_token으로 변경
    console.log('Token:', token); // 토큰 출력
    console.log('Token:', token.access_token); // 토큰 출력
    console.log("토큰 저장 완료");
    message.success('로그인 성공!')

    router.push("/");
  } catch (error) {
    console.error("소셜 로그인 실패:", error);
  }
});
</script>

<template>
  <div>로그인 처리 중...</div>
</template>
