<script lang="ts">
  export let url: string;
  export let size: number;
</script>

<div 
  class="rounded-full overflow-hidden mx-auto"
  style="width: {size}px; height: {size}px;"
>
  <img src={url} alt="Profile Avatar" class="w-full h-full object-cover" />
</div>