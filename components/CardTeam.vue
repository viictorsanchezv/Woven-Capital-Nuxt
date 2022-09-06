<script >
    export default {
        props: {
            teamName : String,
            teamJob :  String,
            teamImage : String,
            teamEmail : String,
            teamSlug: String,
        }
    }
</script>
<template>
        <div class="m-0 p-0 content-team align-items-center d-flex flex-column ">
            <a :href="`/team/${teamSlug}`">
                <img :src="require(`@/assets/image/team/${teamImage}`)" alt="" class="object-cover rounded-circle">
                <h4 class="text-medium text-center">{{teamName}}</h4>
                <p class="text-small text-center">{{teamJob}}</p>
            </a>
            
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
        object-position: top;
    }
    .content-team a, 
    .content-team h4, 
    .content-team p{
        color: var( --color--secondary );
    }
   .content-team  a:hover{
        text-decoration: none;
    }
</style>