<script>
    import CardInsights from "@/components/CardInsights.vue";
    import client from '@/plugins/contentful.js';
    import { insightsData } from '@/data/data.js';
    export default{
        data(){
            return {
                insights: insightsData,
            }
            
        },
    }
</script>

<template>
    <main>
        <section>
            <div class="w-100">
                <div class="content-insights">
                    <template  v-for="(post, index) in insights" >
                        <card-insights
                            :key="index"
                            :titleInsights = "post.titleInsights"
                            :slugInsights = "post.slugInsights"
                            :imageInsights = "post.imageInsights"
                            :dateInsights = "post.createdAt"
                            :flagInsights = "post.articleInd"
                        >
                        </card-insights> 
                    </template>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
    .content-insights {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
        grid-auto-rows: calc( 50vh - 5px);
        grid-gap: 10px;
        margin: 0;
    }
</style>
