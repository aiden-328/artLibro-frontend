import { createRouter, createWebHistory } from 'vue-router'
import PerformanceDetailView from '@/views/PerformanceDetailView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BookView from '@/views/bookView/BookView.vue'
import LibrarySearchView from '@/views/LibrarySearchView.vue'
import ChallengeView from '@/views/ChallengeView.vue'
import PerformanceSearchView from '@/views/PerformanceSearchView.vue'
import CommunityView from '@/views/community/CommunityView.vue'
import LibraryDetailView from '@/views/LibraryDetailView.vue'
import CommunityDetailView from '@/views/community/CommunityDetailView.vue'
import CommunityWriteView from '@/views/community/CommunityWriteView.vue'
import BookDetailView from '@/views/bookDetail/BookDetailView.vue'
import CallbackView from '@/views/CallbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/book',
      name: 'book',
      component: BookView,
    },
    {
      path: '/book/detail/:id',
      name: 'book-detail',
      component: BookDetailView,
      props: true,
    },
    {
      path: '/library/search',
      name: 'library-search',
      component: LibrarySearchView,
    },
    {
      path: '/library/detail/:id',
      name: 'library-detail',
      component: LibraryDetailView,
    },
    {
      path: '/performance',
      name: 'performancesearch',
      component: PerformanceSearchView,
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: ChallengeView,
    },
    // 커뮤니티 메인페이지
    { path: '/community', name: 'community', component: CommunityView },
    // 커뮤니티 상세페이지
    {
      path: '/community/:id',
      name: 'community-detail',
      component: () => import('@/views/community/CommunityDetailView.vue'),
      props: true,
    },
    // 커뮤니티 게시글 작성페이지
    {
      path: '/community/write',
      name: 'community-write',
      component: () => import('@/views/community/CommunityWriteView.vue'),
      props: true,
    },
    // 커뮤니티 게시글 수정페이지
    {
      path: '/community/edit/:id',
      name: 'community-edit',
      component: () => import('@/views/community/CommunityEditView.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/auth/callback/:provider', // OAuth 콜백 경로 추가
      name: 'auth-callback',
      component: CallbackView,
      props: true,
    },
    //화면 보려고 급하게 만들었습니다.
    {
      path: '/performance/:id',
      name: 'performance-detail',
      component: () => import('@/views/PerformanceDetailView.vue'),
    },
  ],
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
