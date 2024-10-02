<script lang="ts">
  import type { Post } from '../lib/types';

  export let post: Post;
</script>

<div class="bg-white shadow-md rounded-lg overflow-hidden">
  <div class="p-6">
    <h2 class="text-xl mb-2 font-primary">{post.title}</h2>
    <p class="text-gray-600 mb-4 font-coding">{post.excerpt}</p>
    <p class="text-sm text-gray-500 font-coding">{new Date(post.date).toLocaleDateString()}</p>
  </div>
</div>