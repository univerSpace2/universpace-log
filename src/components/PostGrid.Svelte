<script lang="ts">
  import type { Post } from '../lib/types';
  import PostCard from './PostCard.svelte';

  export let posts: Post[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each posts as post (post.id)}
    <PostCard {post} />
  {/each}
</div>