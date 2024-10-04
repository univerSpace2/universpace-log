<script lang="ts">
  import PostGrid from '../components/PostGrid.svelte';
  import type { Post } from '../lib/types';
  import { PostsApi } from '../api';
  import { onMount } from 'svelte';
  import Post from './Post.svelte';

  // // 더미 데이터
  // // 백엔드, nestjs에 대한 게시글 예시

  // const posts: Post[] = [
  //   { id: '1', title: 'Nestjs 프로젝트 설정', content: 'Nestjs 프로젝트 설정 방법', updatedAt: '2024-10-01', views: 100},
  //   { id: '2', title: 'Nestjs controller 설정', content: 'Nestjs controller 설정 방법', updatedAt: '2024-10-01', views: 80},
  //   { id: '3', title: 'Nestjs service 설정', content: 'Nestjs service 설정 방법', updatedAt: '2024-10-01', views: 75},
  //   { id: '4', title: 'Nestjs module 설정', content: 'Nestjs module 설정 방법', updatedAt: '2024-10-01', views: 90},
  //   { id: '5', title: 'Nestjs provider 설정', content: 'Nestjs provider 설정 방법', updatedAt: '2024-10-01', views: 85},
  //   { id: '6', title: 'Nestjs에서 postgresql 연동', content: 'Nestjs에서 postgresql 연동 방법', updatedAt: '2024-10-01', views: 120},
  //   { id: '7', title: 'Nestjs에서 redis 연동', content: 'Nestjs에서 redis 연동 방법', updatedAt: '2024-10-01', views: 95},
  //   { id: '8', title: 'Nestjs에서 rabbitmq 연동', content: 'Nestjs에서 rabbitmq 연동 방법', updatedAt: '2024-10-01', views: 70},
  //   { id: '9', title: 'Nestjs에서 kafka 연동', content: 'Nestjs에서 kafka 연동 방법', updatedAt: '2024-10-01', views: 65},
  //   { id: '10', title: 'Nestjs에서 socket.io 연동', content: 'Nestjs에서 socket.io 연동 방법', updatedAt: '2024-10-01', views: 110},
    
  // ];
  let posts: Post[] = [];
  onMount(async () => {
    try{
      posts = await PostsApi.getPosts();
    } catch (error) {
      console.error(error);
    }
  })
</script>

<div class="container mx-auto px-4">
  <PostGrid {posts} />
</div>