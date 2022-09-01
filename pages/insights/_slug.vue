<template>
    <div class="row m-0">
        <div class="col-12 content_post-insight">
            <h1 class="post_insight-title mb-4">{{post.fields.title}}</h1>
            <span class="post_insight-date mb-3">{{dateForm(post.sys.createdAt)}}</span>
            <p class="post_insight-content">{{post.fields.content}}</p>
        </div>
    </div>
</template>
<script>
    import client from '@/plugins/contentful.js';
    export default {
        data(){
            return {
                article : ''
            }
        },
        asyncData ({params}) {
             return client
                .getEntries({
                    content_type: "post",
                    'fields.slug' : params.slug
                })
                .then(entries => {
                  
                    return { post: entries.items[0] }
                })
                .catch( e => console.log(e));
        },
        methods:{
            dateForm(dateI){

                const options = {year: 'numeric', month: 'short', day: 'numeric'};
                const  month = new Date(dateI);
                
                return new Date(month).toLocaleDateString('en', options);
            }
        }
    }
</script>
<style scoped>
    .content_post-insight{
        padding: 5%;
        min-height: calc(100vh - 74px);
    }
    .post_insight-title{
        font-weight: 500;
        font-size: 45px;
        line-height: 115%;
        letter-spacing: -2px;
        color: var(--color--secondary);
    }
    .post_insight-content, 
    .post_insight-date{
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: var(--color--secondary);
    }
</style>
