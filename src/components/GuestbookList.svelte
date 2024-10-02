<script lang="ts">
  import type { GuestbookEntry } from '../lib/types';

  export let entries: GuestbookEntry[];
</script>

<div class="space-y-4">
  {#each entries as entry (entry.id)}
    <div class="bg-gray-100 p-4 rounded-lg">
      <p class="font-semibold font-gooltokki">{entry.name}</p>
      <p class="text-gray-700 font-gooltokki">{entry.message}</p>
      <p class="text-sm text-gray-500 mt-1 font-gooltokki">{new Date(entry.date).toLocaleDateString()}</p>
    </div>
  {/each}
</div>