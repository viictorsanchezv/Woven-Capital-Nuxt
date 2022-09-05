<script>

    export default{
        props:{
            text_buttom: String,
            link_buttom: String,
        }
    }

</script>
<template>

    <div class="m-0 p-0 w-100 text-md-center ">
        <a class="button-primary content-text text-decoration-none" :href="link_buttom" role="button">{{text_buttom}}</a>
    </div>

</template>

<style >

    a.button-primary{
        font-weight: 500;
        font-style: normal;
        background-color: var( --color--secondary);
        border-radius: 4px;
        padding: 8px 16px;  
        color: var(--color-white);
        font-size: 16px;
    }
    a.button-primary:hover{
        background-color: var( --color-btn-hover );
        color: var(--color-white);
    }

</style>