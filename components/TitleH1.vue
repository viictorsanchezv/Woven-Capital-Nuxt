<script >

    export default {
        props: {
            titleH1: String,
        }
    }


</script>

<template>
    <div class="d-flex mt-0 mb-5 mr-0 ml-0  p-0 w-100 align-items-start text-md-center justify-content-center">
        <h1 class="title-h1">{{titleH1}}</h1>
    </div> 
</template>

<style scoped>
    h1.title-h1{
        color: var( --color--secondary );
        font-weight: 500;
        font-size: 70px;
        line-height: 80px;
        letter-spacing: -4px;
        
    }
    .hero-image h1.title-h1{
        width: 52%;
    }


</style>