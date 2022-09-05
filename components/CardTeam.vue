<script >
    export default {
        props: {
            teamName : String,
            teamJob :  String,
            teamImage : String,
            teamEmail : String,
        }
    }
</script>
<template>
        <div class="m-0 p-0 content-team align-items-center d-flex flex-column ">
            <NuxtLink :to="`/team/${teamEmail}`">
                <img :src="require(`@/assets/image/team/${teamImage}`)" alt="" class="object-cover rounded-circle">
                <h4 class="text-24 text-center">{{teamName}}</h4>
                <p class="text-18 text-center">{{teamJob}}</p>
            </NuxtLink>
            
        </div>
   
</template>
<style >
    .container-team{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax( calc(20% - 20px), 1fr));
        grid-gap: 20px;
        gap: 20px;
    }
    .content-team img {
        width: 180px;
        height: 180px;
    }
    .content-team a, 
    .content-team h4, 
    .content-team p{
        color: var( --color--secondary );
    }
</style>