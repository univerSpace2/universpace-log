<script lang="ts">
  import { Link } from "svelte-routing";
  import Banner from "./Banner.svelte";
</script>

<header>
  <Banner />
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <Link to="/" class="text-xl text-gray-800 font-primary">UniverseSpace.log</Link>
          </div>
          <div class="ml-6 flex-shrink-0 flex items-center">
            <Link to="/profile" class=" text-xl text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium font-primary">WHO am I?</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>