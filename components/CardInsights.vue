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
    
    <div class="card-view border-0 w-100 h-100 d-flex position-relative align-items-center justify-content-center" :style="{ 'background-image' : backImageInsights()}">
        <NuxtLink :to="`/insights/${slugInsights}`" class="slug-insights w-100 h-100 aqui">
            <div class="position-relative w-100 h-100">
                <h3 class="card-title position-absolute">{{titleInsights}}</h3>
                <p class="card-date position-absolute text-18">{{dateForm()}}</p>
                <p class="card-read-more position-absolute">Read More <img class="position-absolute" src="@/assets/image/arrow.png"></p>
            </div>
        </NuxtLink>
    </div>

</template>
<style scoped>
    .slug-insights{
        background: #00000052;
        color: transparent;
    }
    .card-view  {
        overflow: hidden;
        grid-row: span 1;
        background-position: center top;
        background-size: cover;
    }
    .card-view:nth-child(3n+1), .card-view:first-child{
        grid-row: span 2;
    }
    .card-view h3.card-title {
        top: 30px;
        left: 30px;
        padding: 0px 0px 0px 4%;
        border-left: 2px solid var(--bg--primary);
        font-size: 24px;
        line-height: 30px;
        width: 50%;
        color: var(--color-white);
    }
    .card-view .card-read-more {
        bottom: 30px;
        right: 70px;
        font-size: 16px;
        line-height: 24px;
        color: #F7F7F7;
        font-weight: 500;
    }
    .card-view .card-read-more img{
        top: 6px;
        margin-left: 6px;
    }
    .card-view .card-read-more:hover img{
        padding-left: 6px;
        transition: .6s ease-out;
    }
    .card-view p.card-date {
        bottom: 30px;
        left: 30px;
        color: var(--color-white);
    }
</style>
