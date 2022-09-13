<script>
   
    export default {
        data (){
            return {
            }
        },
        props:{
            titleInsights : String, 
            slugInsights: String, 
            externalslugInsights: String,
            dateInsights: String,
            imageInsights: String,
        
        },
        methods: {
             urlInsight(urlSlug, externalLink){
        
                if(externalLink != undefined){
                    return externalLink;
                }else
                    return `/insights/${urlSlug}`;
            }
            
        }
    }
</script>
<template>
    
    <div class="card-view border-0 h-100 d-flex position-relative align-items-center justify-content-center" :style="{ 'background-image' : `url(${imageInsights})`}">
        <a :href="urlInsight(slugInsights, externalslugInsights)" class="slug-insights w-100 h-100">
            <div class="position-relative w-100 h-100">
                <h3 class="card-title position-absolute">{{titleInsights}}</h3>
                <p class="card-date position-absolute text-small">{{dateInsights}}</p>
                <p class="card-read-more position-absolute">Read More <img class="position-absolute" src="@/assets/image/arrow.png"></p>
            </div>
        </a>
    </div>

</template>
<style scoped>
    .slug-insights{
        background: #00000052;
        color: transparent;
    }
    .content-insights .card-view  {
        overflow: hidden;
        grid-row: span 1;
    }
    .result-insights .card-view{
        width: 100%;
    }
    .result-insights .card-view:nth-child(2){
        margin-left: 10px;
    }
    .card-view {
        background-position: center top;
        background-size: cover;
    }
    .content-insights .card-view:nth-child(3n+1){
        grid-row: span 2;
    }
    .card-view.card-view h3.card-title {
        border-left: 2px solid var(--bg--primary);
        color: var(--color-white);
    }
    .card-view .card-read-more {
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
        color: var(--color-white);
    }
    @media(min-width: 1441px){
        .card-view h3.card-title {
            top: 60px;
            left: 60px;
            padding: 0 0 0 36px;
            font-size: 24px;
            line-height: 30px;
            width: 400px;
        }
         .card-view p.card-date {
            bottom: 60px;
            left: 60px;
        }
        .card-view .card-read-more {
            bottom: 60px;
            right: 70px;
            font-size: 16px;
            line-height: 24px;
        }
    }
    @media(max-width: 1440px){
        .card-view h3.card-title {
            top: 40px;
            left: 40px;
            padding: 0 0 0 26px;
            font-size: 20px;
            line-height: 24px;
            width: 400px;
        }
        .card-view .card-read-more {
            bottom: 40px;
            right: 50px;
            font-size: 14px;
            line-height: 17px;
        }
        .card-view p.card-date {
            bottom: 40px;
            left: 40px;
        }
    }
    @media(max-width: 768px){
        .content-insights .card-view{
            grid-row: span 1!important;
        }
    }
    
</style>
