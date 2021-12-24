<script context="module">
  export const load = async ({ page, fetch }) => {
    const id = page.params.id;
    const res = await fetch(`/api/posts/${id}.json`);
    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  };
</script>

<script>
  export let post;
</script>

<h1>{@html post.title.rendered}</h1>
{#if post.image}
  <img src={post.image} alt={post.title.rendered} />
{/if}
<p>{@html post.content.rendered}</p>
