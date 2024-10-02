<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { GuestbookEntry } from '../lib/types';

  const dispatch = createEventDispatcher<{addEntry: GuestbookEntry}>();

  let name = '';
  let message = '';

  function handleSubmit() {
    if (name && message) {
      const newEntry: GuestbookEntry = {
        id: Date.now().toString(),
        name,
        message,
        date: new Date().toISOString().split('T')[0]
      };
      dispatch('addEntry', newEntry);
      name = '';
      message = '';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-6">
  <div class="mb-4">
    <label for="name" class="block text-sm font-medium text-gray-700 font-gooltokki">이름</label>
    <input type="text" id="name" bind:value={name} required
           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-gooltokki" />
  </div>
  <div class="mb-4">
    <label for="message" class="block text-sm font-medium text-gray-700 font-gooltokki">메시지</label>
    <textarea id="message" bind:value={message} required rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-gooltokki"></textarea>
  </div>
  <button type="submit" 
          class="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 font-gooltokki">
    방명록 남기기
  </button>
</form>