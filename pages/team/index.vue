<script>
    import titleH2 from '@/components/TitleH2.vue';
    import { teamData } from '@/data/data.js';
    export default {
        data() {
            return {
                teamInfo: teamData,
            }
        },
        components:{
            titleH2,
        }, 
        
    }
</script>
<template>
    <main>
        <section >
            <div class="p-5rem m-0">
                <div class="row m-0 p-4">
                    <div class="col-md-12 p-0 m-0 align-items-center d-flex flex-column text-center">
                        <title-h2 titleH2="Who we are" class="justify-content-center"></title-h2>
                        <p class="text-24 text-team">We’re a team of investors, innovators, and industry experts passionate about developing the next-generation of life-changing mobility technologies.</p>
                    </div>
                </div>
                <div class="container-team m-0">
                  <card-Team 
                        v-for="(team, index) in teamInfo" 
                        :key="index"
                        :teamName="team.teamName"
                        :teamJob="team.teamJob"
                        :teamImage="team.teamImage"
                        :teamEmail="team.teamEmail"
                    >
                    </card-Team>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
    .text-team{
        color: var( --color--secondary );
        width: 80%;
    }
    
</style>
