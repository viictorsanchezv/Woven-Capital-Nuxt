<script>
import itemLink from "@/components/ItemHeader.vue";
import { headerData } from "@/data/data.js";
export default {
  data() {
    return {
      itemsHeader: headerData,
    };
  },
  created() {
    this.expande = false;
  },
  methods: {
    handleExpanded() {
      this.expanded();
    },
    expanded: function (event) {
      this.expande = !this.expande;

      if (this.expande) {
        document
          .querySelector("#header-content")
          .classList.add("menu-expanded");

        document
          .querySelector("#header-content")
          .classList.remove("menu-not-expanded");

        const boxes = document.querySelectorAll(
          ".menu-expanded .item-show-expanded"
        );

        boxes.forEach((box) => {
          box.classList.remove("list-group-none");
        });

        document
          .querySelector("#header-content-mobile")
          .classList.add("expanded-mobile");

        document
          .querySelector("#header-content-mobile")
          .classList.remove("not-expanded-mobile");
      } else {
        document
          .querySelector("#header-content")
          .classList.remove("menu-expanded");

        document
          .querySelector("#header-content")
          .classList.add("menu-not-expanded");

        const boxes2 = document.querySelectorAll(
          ".menu-not-expanded .item-show-expanded"
        );
        boxes2.forEach((box2) => {
          box2.addEventListener("transitionend", function (e) {
            box2.classList.add("list-group-none");
          });
        });

        document
          .querySelector("#header-content-mobile")
          .classList.remove("expanded-mobile");

        document
          .querySelector("#header-content-mobile")
          .classList.add("not-expanded-mobile");
      }
    },
  },
  components: {
    itemLink,
  },
};
</script>
<template>
  <header class="w-100 d-flex justify-content-start">
    <div class="container-header">
      <div class="m-0 p-0 menu-desktop">
        <div
          class="header-container header-desktop d-flex justify-content-between align-items-start flex-column m-0 menu-not-expanded"
          id="header-content"
        >
          <div class="m-0 p-0 w-0">
            <button
              type="button"
              class="img-menu-top p-0 img-menu position-relative border-0"
              id="icon-closed"
              @click="expanded"
            >
              <img
                class="item-hide-expanded position-absolute"
                src="../assets/image/hamburger-menu.png"
                alt="Icon Menu"
                width="35"
              />
              <img
                class="item-show-expanded position-absolute list-group-none"
                src="../assets/image/hamburger-menu-open.png"
                alt="Icon Menu"
                width="35"
                height="35"
              />
            </button>
            <ul
              class="list-group list-unstyled p-0 item-show-expanded list-group-none"
              id="list-group"
            >
              <item-link
              v-on:expanded="handleExpanded"
                v-for="(itemHeader, index) in itemsHeader"
                :key="index"
                :textLink="itemHeader.textLink"
                :linkLink="itemHeader.linkLink"
              >
              </item-link>
            </ul>
          </div>
          <div class="m-0 p-0">
            <a href="/" class="img-menu-bottom position-relative border-0">
              <img
                class="item-hide-expanded position-absolute"
                src="../assets/image/logo-closed.png"
                alt="Image Logo"
                height="45"
                width="45"
              />
              <img
                class="item-show-expanded position-absolute list-group-none"
                src="../assets/image/capital.png"
                alt="Image Logo"
                height="37"
                width="132"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="m-0 p-0 menu-mobile">
        <div
          class="header-container header-mobile d-flex justify-content-between align-items-start flex-column m-0 not-expanded-mobile"
          id="header-content-mobile"
        >
          <div class="m-0 p-0 w-0 content-mobile">
            <button
              type="button"
              class="p-0 img-menu position-relative border-0"
              @click="expanded"
            >
              <img
                class=""
                src="../assets/image/hamburger-menu.png"
                alt="Icon Menu"
                width="35"
              />
            </button>
            <a href="/" class="position-relative border-0">
              <img
                class=""
                src="../assets/image/logo-closed.png"
                alt="Image Logo"
                height="45"
                width="45"
              />
            </a>
           
          </div>
          <div class="modal-menu-mobile">
            <div class="content-modal">
              <button
                type="button"
                class="p-0 position-relative border-0"
                @click="expanded"
              >
                <img
                  class=""
                  src="../assets/image/hamburger-menu-open.png"
                  alt="Icon Menu"
                />
              </button>
              <ul class="list-group list-unstyled p-0" id="list-group">
                <item-link
                v-on:expanded="handleExpanded"
                  v-for="(itemHeader, index) in itemsHeader"
                  :key="index"
                  :textLink="itemHeader.textLink"
                  :linkLink="itemHeader.linkLink"
                >
                </item-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 999;
}
#header-content {
  background: #f7f7f7;
  z-index: 9999;
}
header .header-container {
  padding: 24px 20px;
}
.menu-not-expanded .item-hide-expanded,
.menu-expanded .item-show-expanded {
  opacity: 1;
  transition: 0.8s ease;
}
.menu-not-expanded .item-show-expanded,
.menu-expanded .item-hide-expanded {
  opacity: 0;
  transition: 0.8s ease;
}
.menu-not-expanded img.item-show-expanded, 
 .menu-expanded img.item-hide-expanded {
    transition: 0s linear;
}
header .header-desktop ul.list-group {
  margin: 81px 0 0;
  min-width: 168px;
}
header ul.list-group li {
  padding: 10px 0;
}
.menu-not-expanded .list-group-none {
  display: none;
}
header button {
  background-color: transparent;
}
.img-menu img {
  left: 5px;
}
.img-menu-top {
  height: 35px;
  width: 35px;
}
.img-menu-top img {
  top: 0;
}
.img-menu-bottom img {
  bottom: 0;
}
.w-0 {
  width: 0;
}
.header-mobile .content-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.modal-menu-mobile .content-modal button {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.modal-menu-mobile .content-modal ul#list-group {
  margin-top: 50px;
}
.modal-menu-mobile .content-modal ul#list-group li {
  padding: 10px 0;
}
div#header-content-mobile {
  padding: 15px 20px;
}
div#header-content-mobile {
  position: fixed;
  top: 0;
  width: 100%;
  background: #f7f7f7;
}
.modal-menu-mobile {
  padding: 24px 20px;
  background: #f7f7f7;
  height: calc(100vh);
  position: fixed;
  left: 0;
  width: 250px;
  margin-top: 0;
  transition: transform 250ms ease-in-out;
  top: 0;
}
.not-expanded-mobile .modal-menu-mobile {
  transform: translateX(-250px);
}
.expanded-mobile .modal-menu-mobile {
  transform: translateX(0px);
  transition: transform 250ms ease-in-out;
}

@media (min-width: 1025px) {
  div#header-content {
    height: 100vh;
  }
  .container-header {
    position: fixed;
  }
  #header-content.menu-not-expanded {
    width: 85px;
    transition: width 0.8s ease;
  }
  #header-content.menu-expanded {
    width: 200px;
    transition: width 0.8s ease;
  }
  .menu-mobile {
    display: none;
  }
  .menu-desktop {
    display: block;
  }
}
@media (max-width: 1024px) {
  .container-header {
    position: relative;
    width: 100%;
  }
  #header-content {
    width: 100%;
    transition: width 0.8s ease;
  }
  #header-content div,
  button#icon-closed {
    width: 100%;
  }
  .img-menu-top img {
    right: 5px;
    left: unset;
  }
  .menu-mobile {
    display: block;
  }
  .menu-desktop {
    display: none;
  }
}
</style>
