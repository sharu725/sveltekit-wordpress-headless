<script>
  import "../app.css";
</script>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>
<div class="layout">
  <slot />
</div>

<style>
  .layout {
    margin: 0 5vw;
  }
</style>
