<script>
    import CardInsights from "@/components/CardInsights.vue";
    import client from '@/plugins/contentful.js';
    export default{
        asyncData () {
             return client
                .getEntries({
                    content_type: "post"
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
        <section>
            <div class="w-100">
                <div class="content-insights">
                    <template  v-for="(post, index) in posts" >
                        <card-insights
                            :key="index"
                            :titleInsights = "post.fields.title"
                            :slugInsights = "post.fields.slug"
                            :imageInsights ="(post.fields.image ) ? post.fields.image.fields.file.url : ''"
                            :dateInsights = "post.sys.createdAt"
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
        grid-auto-rows: calc( 50vh - 10px);
        grid-gap: 10px;
        margin: 0;
    }
</style>
