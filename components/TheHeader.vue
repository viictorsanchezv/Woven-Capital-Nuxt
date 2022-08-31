<script setup>

    import {ref} from "vue";
    import itemLink from "./list-item.vue";

    const itemsHeader = [
        { textLink: 'About', linkLink: '#'  },
        { textLink: 'Portfolio', linkLink: '#'  },
        { textLink: 'Team', linkLink: '#'  },
        { textLink: 'Insights', linkLink: '#'  },
        { textLink: 'Pitch', linkLink: '#'  },
        { textLink: 'Contact', linkLink: '#'  },
        { textLink: 'Woven Planet', linkLink: '#'  },
    ];
     var expande = false;
    function expanded() {
            expande = !expande;
            if(expande){
                document.querySelector('#header-content').classList.add('menu-expanded');
                document.querySelector('#header-content').classList.remove('menu-not-expanded');
            }else{
                document.querySelector('#header-content').classList.remove('menu-expanded');
                document.querySelector('#header-content').classList.add('menu-not-expanded');
            }
       
   }
</script>
<template>
    <header class="position-fixed menu-not-expanded vh-100" id="header-content">
    <div class="header-container d-flex justify-content-between align-items-start flex-column w-100 m-0 min-vh-100">
        <div class="m-0 p-0" >
            <button type="button" class="img-menu-top img-menu position-relative border-0" id="icon-closed" @click="expanded">
                <img class="item-hide-expanded position-absolute" src="../assets/image/hamburger-menu.png" alt="Icon Menu" width="35">
                <img class="item-show-expanded position-absolute" src="../assets/image/hamburger-menu-open.png" alt="Icon Menu" width="32.38" height="31.57" >
            </button>
            <ul class="list-group list-unstyled p-0 item-show-expanded">
                <item-link 
                v-for="(itemHeader, index) in itemsHeader"
                :key="index"
                :textLink = "itemHeader.textLink"
                :linkLink = "itemHeader.linkLink">
                </item-link>
            </ul>
        </div>
        <div class="m-0 p-0" >
            <a href="/" class="img-menu-bottom position-relative border-0">
                <img class="item-hide-expanded position-absolute" src="../assets/image/logo-closed.png" alt="Image Logo" height="45" width="45">
                <img class="item-show-expanded position-absolute " src="../assets/image/capital.png" alt="Image Logo" height="37" width="132" >
            </a>
        </div>  
    </div>    
</header>
</template>

<style>
header.menu-not-expanded{
    width: 85px;
    -webkit-transition: width 1s ease-in-out;
    transition: width 0.8s  ease;
}
header.menu-expanded{
    width: 200px;
    transition: width 0.8s  ease;
}
header{
    background: #F7F7F7;
    z-index: 9999;
}
header .header-container { 
    padding: 24px 20px;
}
.header-container .content-text-menu{
    color: var( --color--secondary );
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 16px;
    margin-bottom: 24px;
}
.menu-not-expanded .item-hide-expanded, 
.menu-expanded .item-show-expanded{
    opacity: 1;
    transition: 0.7s ease;
}
.menu-not-expanded .item-show-expanded, 
.menu-expanded .item-hide-expanded{
    opacity: 0;
    transition: 0.7s ease;
}
header ul.list-group{
    margin: 81px 0 0 ;
    min-width: 168px;
}
header ul.list-group li {
    padding: 6px 0;
}
header button{
    background-color: transparent;
}
.img-menu img{
    left: 0;
}
.img-menu-top img{
    top: 0;
}
.img-menu-bottom img{
    bottom: 0;
}
</style>