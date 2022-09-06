<script>
    import SectionColumns from "@/components/SectionColumns.vue";
    import { teamData } from '@/data/data.js';
    export default {
    
        data(){
            return {
              
            }
        },
        components: {
            SectionColumns,
        },
        asyncData ({params}) {

            const result = teamData.find( Element => Element.teamSlug == params.email );
            return { teamProfile : result };
        
        },
    }
</script>
<template>
    <main >
         <section-columns>
            <template #left>
                <div class="col-md-6 col-12 border-box p-0 justify-content-start position-sticky vh-100 top-0">
                <img
                    class="vh-100  w-100 object-cover m-0 p-0"
                    :src="require(`@/assets/image/team/${teamProfile.teamImage}`)"
                    alt=""
                />
                </div>
            </template>
            <template #right>
                <div class="col-md-6 col-12 border-box p-7">
                    <h1 class="h1-45 name-team">{{teamProfile.teamName}}</h1>
                    <p class="text-medium job-team">{{teamProfile.teamJob}}</p>    
                    <div class="social">
                        <a :href="teamProfile.teamLinkedin" class="mr-2">
                            <img class="image-social object-cover" src="@/assets/image/icon/linkedin.png" alt="">
                        </a>
                        <a :href="`mailto:${teamProfile.teamEmail}`">
                            <img class="image-social object-cover" src="@/assets/image/icon/email.png" alt="">
                        </a>
                    </div>    
                    <p class="desc-team text-small mt-4">{{teamProfile.teamDesc}}</p>       
                </div>
            </template>
        </section-columns>
    </main>
</template>

<style scoped>
    .name-team{
        padding-bottom: 20px;
        border-bottom: 2px solid var( --bg--primary );
        width: fit-content;
    }
    .job-team{
        color: #818181;
    }
    .image-social{
        width: 26px;
        height: 22px;
    }
    .desc-team{
        white-space: pre-line;
        color: var( --color--secondary );
    }
</style>
