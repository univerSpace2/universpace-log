<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Banner from "./components/Banner.svelte";
  import Home from "./routes/Home.svelte";
  import Post from "./routes/Post.svelte";
  import Profile from "./routes/Profile.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="min-h-screen bg-gray-100">
    <Banner />
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <Link to="/" class="text-xl font-bold text-gray-800">UniverseSpace.log</Link>
            </div>
            <div class="ml-6 flex space-x-8">
              <Link to="/" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">홈</Link>
              <Link to="/profile" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">프로필</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/profile" component={Profile} />
      </div>
    </main>

    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-base text-gray-500">
          &copy; 2024 UniverseSpace.log. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</Router>
