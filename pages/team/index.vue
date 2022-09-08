<script>
    import titleSecundary from '@/components/TitleSecundary.vue';
    import { teamData } from '@/data/data.js';
    import client from '@/plugins/contentful.js';

    export default {
        data() {
            return {
                teamInfo: teamData,
            }
        },
        components:{
            titleSecundary,
        }, 
        asyncData () {
             return client
                .getEntries({
                    content_type: "teamNwc"
                })
                .then(entries => {
                  
                    return { posts: entries.items }
                })
                .catch( e => console.log(e));
        },
        
    }
</script>
<template>
    <main>
        <section >
            <div class="p-7 m-0">
                <div class="row m-0 p-4">
                    <div class="col-md-12 p-0 m-0 align-items-center d-flex flex-column text-center">
                        <title-secundary titleH2="Who we are" class="justify-content-center"></title-secundary>
                        <p class="text-medium text-team">We’re a team of investors, innovators, and industry experts passionate about developing the next-generation of life-changing mobility technologies.</p>
                    </div>
                </div>
                <div class="container-team p-0">
                    <card-Team 
                        v-for="index in 10" 
                        :key="index"
                        :teamName="posts[0].fields.title"
                        :teamJob="posts[0].fields.designation"
                        :teamImage="posts[0].fields.profilePic.fields.file.url"
                        :teamEmail="posts[0].fields.emailId"
                        :teamSlug="posts[0].fields.slug"
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
    .container-team{
        margin-top: 4%;
    }
    p.text-team{
        max-width: 1022px;
    }
    
</style>
