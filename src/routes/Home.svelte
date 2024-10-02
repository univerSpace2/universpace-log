<script lang="ts">
  import PostGrid from '../components/PostGrid.svelte';
  import type { Post } from '../lib/types';

  // 더미 데이터
  // 백엔드, nestjs에 대한 게시글 예시

  const posts: Post[] = [
    { id: '1', title: 'Nestjs 프로젝트 설정', excerpt: 'Nestjs 프로젝트 설정 방법', date: '2024-10-01' },
    { id: '2', title: 'Nestjs controller 설정', excerpt: 'Nestjs controller 설정 방법', date: '2024-10-01' },
    { id: '3', title: 'Nestjs service 설정', excerpt: 'Nestjs service 설정 방법', date: '2024-10-01' },
    { id: '4', title: 'Nestjs module 설정', excerpt: 'Nestjs module 설정 방법', date: '2024-10-01' },
    { id: '5', title: 'Nestjs provider 설정', excerpt: 'Nestjs provider 설정 방법', date: '2024-10-01' },
    { id: '6', title: 'Nestjs에서 postgresql 연동', excerpt: 'Nestjs에서 postgresql 연동 방법', date: '2024-10-01' },
    { id: '7', title: 'Nestjs에서 redis 연동', excerpt: 'Nestjs에서 redis 연동 방법', date: '2024-10-01' },
    { id: '8', title: 'Nestjs에서 rabbitmq 연동', excerpt: 'Nestjs에서 rabbitmq 연동 방법', date: '2024-10-01' },
    { id: '9', title: 'Nestjs에서 kafka 연동', excerpt: 'Nestjs에서 kafka 연동 방법', date: '2024-10-01' },
    { id: '10', title: 'Nestjs에서 socket.io 연동', excerpt: 'Nestjs에서 socket.io 연동 방법', date: '2024-10-01' },
    
  ];
</script>

<div class="container mx-auto px-4">
  <PostGrid {posts} />
</div>