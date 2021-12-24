<script context="module">
  export const load = async ({ fetch, page }) => {
    const id = page.params.id;
    const res = await fetch(`/api/post/${id}.json`);
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

<h1>{post.title.rendered}</h1>
<img src="{post.image}" alt="{post.title}">
<p>{@html post.content.rendered}</p>
