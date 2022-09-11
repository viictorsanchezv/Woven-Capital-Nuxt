<script>

export default {
 
};
</script>

<template>
  <header class="py-4 position-fixed top-0 w-100">
    <nav class="w-100">
      <ul class="w-100 m-0 p-0 d-flex justify-content-center">
        <li class="list-unstyled">
          <a class="px-3 rounded py-1 mx-3 scroll-active" href="#partner=nuro" >
            Nuro
          </a>
        </li>
        <li class="list-unstyled">
          <a class="px-3 rounded py-1 mx-3" href="#partner=Ridecell">
            Ridecell
          </a>
        </li>
        <li class="list-unstyled">
          <a class="px-3 rounded py-1 mx-3" href="#partner=Whill"> WHILL </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.scroll-active {
  background: var(--color--secondary);
  color: white;
}
li a {
  color: var(--color--secondary);
}
header {
  z-index: 1000;
}
</style>
