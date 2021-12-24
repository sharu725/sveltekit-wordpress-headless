<script>
  export let post;
</script>

<h2>{post.title.rendered}</h2>
<img src={post.image} alt="" />
<p>{@html post.excerpt.rendered}</p>
<a href={`/post/${post.id}`}>Read More</a>

<style>
  :global(.more-link) {
    display: none;
  }
</style>
