<template>
    <div class="row m-0">
        <div class="col-12 content_post-insight">
            <h1 class="post_insight-title mb-4 h1-45">{{insight.titleInsights}}</h1>
            <p class="post_insight-date mb-4 text-small">{{insight.createdAt}}</p>
            <img
                    class="w-100 object-cover m-0 p-0 image-insight"
                    :src="require(`@/assets/image/insights/${insight.imageInsights}`)"
                    alt=""
                />
            <p class="post_insight-content text-small">{{insight.contentInsight}}</p>
        </div>
    </div>
</template>
<script>
    import { insightsData } from '@/data/data.js';
    export default {
    
        data(){
            return {
             
            }
        },
        asyncData ({params}) {
           const result = insightsData.find( Element => Element.slugInsights == params.slug );
        return { insight : result };
        },
        methods:{
        }
    }
</script>
<style scoped>
    .content_post-insight{
        padding: 5%;
        min-height: calc(100vh - 74px);
    }
    .post_insight-title{
        color: var(--color--secondary);
    }
    .post_insight-content, 
    .post_insight-date{
        color: var(--color--secondary);
    }
    .post_insight-content{
        white-space: pre-line;
    }
    .image-insight{
        height: 400px;
        object-position: center top;
    }
</style>
