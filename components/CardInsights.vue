<script>
    import backgroundUrl from '@/assets/image/about/rectangle-401.png'
    export default {
        data (){
            return {
                backgroundUrl,
            }
        },
        props:{
            titleInsights : String, 
            slugInsights: String, 
            dateInsights: String,
            imageInsights: String
        },
        methods: {
            backImageInsights( ) {
                if( this.imageInsights.length === 0){
                    return `url(${backgroundUrl})`;
                }else{
                    return `url(${this.imageInsights})` ;
                }
            },
            dateForm(){

                const options = {year: 'numeric', month: 'short', day: 'numeric'};
                const  month = new Date(this.dateInsights);
                
                return new Date(month).toLocaleDateString('en', options);
        
            }
        }
    }
</script>
<template>
    
    <div class="card-view border-0 w-100 h-100" :style="{ 'background-image' : backImageInsights()}">
        <nuxt-link :to="`/insights/${slugInsights}`" class="slug-insights w-100 h-100">
            <div class="position-relative w-100 h-100">
                <h3 class="card-title position-absolute">{{titleInsights}}</h3>
                <p class="card-date position-absolute">{{dateForm()}}</p>
                <a class="card-read-more position-absolute" :href="slugInsights">Read More</a>
            </div>
        </nuxt-link>
    </div>
   
    
</template>
<style scoped>
    .slug-insights{
        background: transparent;
        color: transparent;
    }
    .card-view  {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        grid-row: span 1;
        background-position: center top;
        background-size: cover;
    }
    .card-view:nth-child(3n+1), .card-view:first-child{
        grid-row: span 2;
    }
    .card-view h3.card-title {
        top: 60px;
        left: 40px;
        padding: 0px 0px 0px 36px;
        border-left: 2px solid var(--bg--primary);
        font-size: 24px;
        line-height: 30px;
        width: 50%;
        color: var(--color-white);
    }
    .card-view a.card-read-more {
        bottom: 20px;
        right: 20px;
        font-size: 16px;
        line-height: 24px;
        color: #F7F7F7;
    }
    .card-view p.card-date {
        bottom: 20px;
        left: 40px;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
    }
</style>
