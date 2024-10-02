<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import Post from "./routes/Post.svelte";
  import Profile from "./routes/Profile.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Header />
    
    <main class="flex-grow max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/profile" component={Profile} />
      </div>
    </main>

    <Footer />
  </div>
</Router>