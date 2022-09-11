<script >
    export default{
        props: {
            textLink: String, 
            linkLink: String, 
        }
   }
</script>
<template>
    <li class="list-item text-decoration-none text-center m-0">
        <a class="text-decoration-none content-text-menu" :href="linkLink">{{textLink}}</a>
    </li>
</template>
<style scoped>
    .content-text-menu{
        white-space: pre;
    }
    header .content-text-menu{
        color: var( --color--secondary );
        padding: 8px 16px;
        margin-bottom: 24px;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }
    footer .content-text-menu, 
    footer .company .content-text{
        color: var( --color-white );
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    footer .content-text-menu:hover {
        color: var(--bg--primary);
    }
    @media(min-width:1280px){
        footer .content-text-menu{
            padding: 8px 16px;
        }   
    }
    @media(max-width:1280px){
        footer .content-text-menu{
            padding: 8px;
        }   
    }
</style>
