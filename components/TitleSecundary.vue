<script >
    export default {
        props: {
            titleH2: String,
            spanTitleH2: {
                type: String, 
                default: '',
            } 
        }
    }
</script>

<template>
    <div class="d-flex mt-0 mb-4 mr-0 ml-0 p-0 w-100">
        <h2 class="title-secundary">{{ titleH2 }} <span> {{spanTitleH2}} </span></h2>
    </div>
</template>

<style scoped>
    .title-secundary, .title-secundary span{
        font-weight: 500;
        font-style: normal;
        letter-spacing: -2px;
    }
    .title-secundary{
        color: var( --color--secondary);
    }
    .title-secundary span{
        color: var( --bg--primary);
    }
    
   
    @media(min-width: 1441px){
        .title-secundary, .title-secundary span{
            font-size: 45px;
            line-height: 51.75px;
        }
        .our-portfolio h2.title-secundary, 
        .our-partner-together h2.title-secundary{
            width: 610px;
        }
    }
    @media(max-width: 1440px){
        .title-secundary, .title-secundary span{
            font-size: 40px;
            line-height: 48px;
        }
        .our-portfolio h2.title-secundary, 
        .our-partner-together h2.title-secundary{
            width: 570px;
        }
    }
</style>