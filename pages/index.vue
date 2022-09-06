<script>
    
    import ButtomPrimary from "@/components/ButtomPrimary.vue";
    import titleSecundary from "@/components/TitleSecundary.vue";
    import newLast from "@/components/LastNew.vue";
    import cardPortfolio from "@/components/CardPortfolio.vue";
    import CardInsights from "@/components/CardInsights.vue";
    import { portfoliosData , insightsData } from '@/data/data.js';
   
    export default {
       data(){
            return {
                portfolios: portfoliosData,
                insights: insightsData,
            }
            
        }, 
        components:{
            ButtomPrimary,
            titleSecundary,
            newLast,
            cardPortfolio,
            CardInsights
        },
    }

</script>
<template>
    <main>
    <!-- hero image -->
        <section class="hero-image vh-100 d-flex flex-column position-relative align-items-center w-100">
        <div class="position-relative w-100">
            <video class="vh-100 position-absolute tp-0 lft-0 w-100 object-cover top-0 lef-0" src="@/assets/video/Woven-Capital-Animated.mp4" autoplay="true" muted="true" loop="true" poster=""></video>
            <div class="content-hero row align-items-start text-md-center justify-content-center m-0">
                <div class="col-12 m-0 p-0 d-flex justify-content-center flex-column align-items-center">
                    <div class="mt-0 mb-5 mr-0 ml-0 p-0 w-100 align-items-start text-md-center justify-content-center">
                        <img src="../assets/image/Logo_text.png" alt="" width="325" height="45">
                    </div>
                    <h1 class="title-home">Fueling the engine of future growth.</h1>
                    <buttom-primary class="d-flex justify-content-center align-items-start " text_buttom="Read our Story" link_buttom="/about"></buttom-primary>
                </div>
            </div>
        </div>
        </section>
        <!-- last new -->
        <section class="new-last-post m-0 p-0 position-relative d-flex justify-content-center">
            <div class=" position-relative w-100">
                <div class="row m-0 p-0">
                    <div class="col-12 m-0 p-0">
                        <new-last titleLast="WHILL Secures Funding from Woven Capital to Scale Short-Distance Mobility Service Globally"></new-last>
                    </div>
                </div>
            </div>
        </section>
        <!-- portfolio -->
        <section class="our-portfolio d-flex justify-content-center w-100">
            <div class=" position-relative w-100">
                <div class="row text-md-center justify-content-center m-0 p-0 position-relative ">
                    <div class="col-12 m-0 p-0 ">

                        <title-secundary class="justify-content-center" titleH2="Meet the leaders shaping the world of tomorrow, " spanTitleH2="today"></title-secundary>
                    
                        <p class="text-medium text-portfolio">Our Portfolio</p>
                        
                        <div class="d-flex m-0 p-0 w-100 justify-content-center">
                            <a href="/portfolio" class="w-100 h-100 m-0 p-0">
                                <img src="../assets/image/chevron-down.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row content-portfolio mt-5 mb-0 mr-0 ml-0 p-0 ">        

                    <card-portfolio 
                        v-for="(portfolio, index) in portfolios"
                        :key="index"
                        :iconPort= "portfolio.iconPort" 
                        :imagePort= "portfolio.imagePort" 
                        :linkPort=  "portfolio.linkPort" 
                    ></card-portfolio>
                    
                </div>
            </div>
        </section>
        <!-- partner -->
        <section class="partner-together d-flex justify-content-center w-100">
            <div class=" position-relative w-100">
                <div class="row align-items-start text-md-center justify-content-center m-0 p-0">
                    <div class="col-12 m-0 p-0 d-flex flex-column align-items-center">
                        
                        <title-secundary  class="justify-content-center" titleH2="Partner together"></title-secundary>
                    
                        <p class="mb-4 mr-0 ml-0 p-0 text-medium text-partner">If you share our vision and your company would like to be considered for investment by Woven Capital, we want to hear from you.</p>

                        <buttom-primary class="mb-5 mr-0 ml-0 mt-0 p-0 justify-content-center align-items-start" text_buttom="Tell us about yourself" link_buttom="/pitch"></buttom-primary>

                        <img src="../assets/image/partner.png" class="mt-5 mb-0 mr-0 ml-0 p-0 partner-img" alt="">
                        
                    </div>
                </div>
            </div>
        </section>
        <!-- Insights-->
        <section>
            <div class="w-100">
                <div class="content-insights m-0">
                    <template  v-for="(post, index) in insights" >
                        <card-insights
                            :key="index"
                            :titleInsights = "post.titleInsights"
                            :slugInsights = "post.slugInsights"
                            :imageInsights = "post.imageInsights"
                            :dateInsights = "post.createdAt"
                            v-if ="index < 3"
                        >
                        </card-insights> 
                    
                        
                    </template>
                </div>
            </div>
        
                    
        </section>
    </main>
</template>
<style >
    h1.title-home{
        color: var( --color--secondary );
        font-weight: 500;
        font-size: 70px;
        line-height: 80px;
        letter-spacing: -4px;
        
    }
    .hero-image h1.title-home{
        width: 52%;
    }
    .hero-image{
        background-position: center;
        background-size: cover;
    }
    .content-hero{
        padding-top: 75px;
    }
    .text-portfolio, 
    .text-partner{
        color: var( --color--secondary );
    }
    .text-partner{
        width: 54%;
    }
    .our-portfolio{
        padding: 158px 0px 0px 0px;
    }
    .content-portfolio{
        height: 605px;
    }
    .partner-together{
        padding: 107px 0 0 0;
    }
    .partner-together img{
        width: 984px;
    }
    .content-insights {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
        grid-auto-rows: calc( 50vh - 10px);
        grid-gap: 10px;
    }
</style>


