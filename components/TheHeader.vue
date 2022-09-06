<script >
    import itemLink from "@/components/ListItem.vue";
    import {headerData} from "@/data/data.js"; ; 
    export default {
        data(){
            return {
                
                itemsHeader : headerData,
            }
        }, 
        created(){
            this.expande = false;
        },
        methods:{
            expanded: function (event) {
               
                this.expande = !this.expande;

                if(this.expande){
                    document.querySelector('#header-content').classList.add('menu-expanded');
                    document.querySelector('#header-content').classList.remove('menu-not-expanded');
                    const boxes = document.querySelectorAll('.menu-expanded .item-show-expanded');
                    boxes.forEach( box => {
                        box.classList.remove('list-group-none');
                    });
                    
                }else{
                    document.querySelector('#header-content').classList.remove('menu-expanded');
                    document.querySelector('#header-content').classList.add('menu-not-expanded');
                    const boxes2 = document.querySelectorAll('.menu-not-expanded .item-show-expanded');
                    boxes2.forEach( box2 => {
                        box2.addEventListener('transitionend', function (e){
                            box2.classList.add('list-group-none');
                        });
                    });

                }
            }
        }, 
        components: {
            itemLink,
        }
    }
  
    
</script>
<template>
    <header class="w-100 d-flex justify-content-start" >
        <div class="position-fixed container-header">
            <div class="header-container d-flex justify-content-between align-items-start flex-column m-0 min-vh-100 menu-not-expanded" id="header-content">
                    <div class="m-0 p-0 w-0" >
                        <button type="button" class="img-menu-top p-0 img-menu position-relative border-0" id="icon-closed" @click="expanded">
                            <img class="item-hide-expanded position-absolute" src="../assets/image/hamburger-menu.png" alt="Icon Menu" width="35">
                            <img class="item-show-expanded position-absolute list-group-none" src="../assets/image/hamburger-menu-open.png" alt="Icon Menu" width="35" height="35" >
                        </button>
                        <ul class="list-group list-unstyled p-0 item-show-expanded list-group-none" id="list-group">
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
                            <img class="item-show-expanded position-absolute list-group-none" src="../assets/image/capital.png" alt="Image Logo" height="37" width="132" >
                        </a>
                    </div>  
                </div>
            
        </div>
    </header>
</template>

<style scoped>
header{
    z-index: 999;
}
#header-content.menu-not-expanded{
    width: 85px;
    transition: width 0.8s  ease;
}
#header-content.menu-expanded{
    width: 200px;
    transition: width 0.8s  ease;
}
#header-content{
    background: #F7F7F7;
    z-index: 9999;
}
header .header-container { 
    padding: 24px 20px;
}
.menu-not-expanded .item-hide-expanded, 
.menu-expanded .item-show-expanded{
    opacity: 1;
    transition: 0.8s ease;
}
.menu-not-expanded .item-show-expanded, 
.menu-expanded .item-hide-expanded{
    opacity: 0;
    transition: 0.8s ease;
}
header ul.list-group{
    margin: 81px 0 0 ;
    min-width: 168px;
}
header ul.list-group li {
    padding: 6px 0;
}
.list-group-none{
    display: none;
}
header button{
    background-color: transparent;
}
.img-menu img{
    left: 5px;
}
.img-menu-top{
    height: 35px;
    width: 35px;
}
.img-menu-top img{
    top: 0;
}
.img-menu-bottom img{
    bottom: 0;
}
.w-0{
    width: 0;
}
</style>