<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/posts.json");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import PostItem from "$lib/PostItem.svelte";
  export let posts;
</script>

<h1>Wordpress Posts</h1>
{#await posts then posts}
  {#each posts as post}
    <PostItem {post} />
  {/each}
{/await}
