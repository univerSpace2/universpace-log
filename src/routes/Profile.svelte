<script lang="ts">
  import ProfileAvatar from '../components/ProfileAvatar.svelte';
  import GuestbookList from '../components/GuestbookList.svelte';
  import GuestbookForm from '../components/GuestbookForm.svelte';
  import type { GuestbookEntry } from '../lib/types';

  let profileInfo = {
    name: "김우주",
    bio: "안녕하세요! 저는 nestjs 개발자 김우주입니다.",
    avatarUrl: "https://blog.kakaocdn.net/dn/dhP2Wq/btrFKnODpIa/3NTHnbvwNK8wUt14uiL2r0/img.jpg"
  };

  let guestbookEntries: GuestbookEntry[] = [
    { id: '1', name: '진현덕', message: '멋진 블로그네요!', date: '2024-03-15' },
    { id: '2', name: '서규진', message: '백엔드에 대해 많이 배웠어요.', date: '2024-03-16' },
    { id: '3', name: '강민호', message: '프론트도 다뤄주세요', date: '2024-03-17' },
    { id: '4', name: '김윤태', message: '혹시 저희 회사 다니실래요?', date: '2024-03-18' },

  ];

  function addGuestbookEntry(event: CustomEvent<GuestbookEntry>) {
    const newEntry = event.detail;
    guestbookEntries = [...guestbookEntries, newEntry];
  }
</script>

<div class="container mx-auto px-4 py-8">
  <div class="max-w-2xl mx-auto">
    <div class="text-center mb-8">
      <ProfileAvatar url={profileInfo.avatarUrl} size={200} />
      <h1 class="text-3xl font-bold mt-4 font-gooltokki">{profileInfo.name}</h1>
      <p class="mt-2 text-gray-600 font-gooltokki">{profileInfo.bio}</p>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4 font-gooltokki">방명록</h2>
      <GuestbookList entries={guestbookEntries} />
      <GuestbookForm on:addEntry={addGuestbookEntry} />
    </div>
  </div>
</div>