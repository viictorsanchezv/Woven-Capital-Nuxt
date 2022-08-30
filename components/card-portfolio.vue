<script setup>
    defineProps({
        iconPort : String,
        imagePort :  String,
        linkPort : String,
    });
</script>
<template>
    
    <div class="col-12 col-md-4 col-lg-4 p-0 portfolio" :style="{ 'background-image' : 'url('+require('../assets/image/'+imagePort ) + ' )'}">
        <a :href="linkPort" class="w-100 h-100 m-0 p-0">
            <div class="overlay w-100 h-100 d-flex align-items-center justify-content-center m-0 p-0">
                <img :src="require(`../assets/image/${iconPort}`)" alt="">
            </div>
        </a>
    </div>
</template>
<style >

.portfolio:first-child{
    margin: 0 4px 0 0 ;
}
.portfolio:nth-child(2){
    margin: 0 2px;
}
.portfolio:nth-child(3){
    margin: 0 0 0 4px;
}
.content-portfolio{
    height: 605px;
}
.content-portfolio .portfolio{
    background-position: center;
    background-size: cover;
    height: 100%;
    width: calc( 33.33333333% - 4px);
    flex: 0 0 calc( 33.33333333% - 4px)!important;
    max-width: calc( 33.33333333% - 4px)!important;
}
.content-portfolio .portfolio .overlay{
    background-color: #00000078;
    opacity: 0;
}
.content-portfolio .portfolio:hover .overlay{
    opacity: 1;
}
.content-portfolio .portfolio img{
    width: 226px;
}

</style>