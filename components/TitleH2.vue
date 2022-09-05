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
        <h2 class="title-h2">{{ titleH2 }} <span>{{spanTitleH2}}</span></h2>
    </div>
</template>

<style scoped>

.title-h2, .title-h2 span{
    font-size: 45px;
    font-weight: 500;
    font-style: normal;
    line-height: 51.75px;
    letter-spacing: -2px;
}
.title-h2{
    color: var( --color--secondary);
}
.title-h2 span{
    color: var( --bg--primary);
}
.our-portfolio h2.title-h2, 
.our-partner-together h2.title-h2{
    width: 52%;
}
.template-col h2.title-h2{
    width: 75%;
}
</style>