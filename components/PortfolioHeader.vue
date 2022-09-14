<script>
export default {
  methods: {
    activeMenu() {
      if (typeof window !== "undefined") {
        const li = document.querySelectorAll(".linkPortfolio");
        const sec = document.querySelectorAll(".page-section");

        let len = sec.length;
        while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
        li.forEach((ltx) => ltx.classList.remove("active"));
        li[len].classList.add("active");
      }
    },
  },
  mounted() {
    this.activeMenu();
    window.addEventListener("scroll", this.activeMenu);
  },
};
</script>

<template>
  <header
    class="py-4 position-fixed w-100 d-flex justify-content-center header-portfolio"
  >
    <nav class="">
      <ul class="w-100 m-0 p-0 d-flex justify-content-center">
        <li class="list-unstyled linkPortfolio">
          <a class="px-3 rounded py-1 mx-3 refPortfolio" href="#nuro"> Nuro </a>
        </li>
        <li class="list-unstyled linkPortfolio">
          <a class="px-3 rounded py-1 mx-3 refPortfolio" href="#ridecell">
            Ridecell
          </a>
        </li>
        <li class="list-unstyled linkPortfolio">
          <a class="px-3 rounded py-1 mx-3 refPortfolio" href="#whill">
            WHILL
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.header-portfolio {
  top: 0;
}
.scroll-active {
  background: var(--color--secondary);
  color: white;
}
li a {
  color: var(--color--secondary);
}
header {
  z-index: 996;
}
.linkPortfolio.active .refPortfolio {
  background: var(--color--secondary);
  color: var(--color-white);
}
.linkPortfolio .refPortfolio {
  padding: 4px 8px;
  border-radius: 8px;
}
.linkPortfolio:not(.active) .refPortfolio {
  color: var(--color--secondary);
}
@media (max-width: 767px) {
  .header-portfolio {
    top: 78px;
  }
}
</style>
