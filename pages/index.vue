<script>
    
    import ButtomPrimary from "@/components/ButtomPrimary.vue";
    import titleH1 from "@/components/TitleH1.vue";
    import titleH2 from "@/components/TitleH2.vue";
    import newLast from "@/components/LastNew.vue";
    import cardPortfolio from "@/components/CardPortfolio.vue";
    import CardInsights from "@/components/CardInsights.vue";
   
    import client from '@/plugins/contentful.js';

    export default {
       data(){
            return {
                portfolios : ([
                    { iconPort: "will-Logo.png" , imagePort: "whill.png" , linkPort : "#"},
                    { iconPort: "nuro-Logo.png" , imagePort: "nuro.png" , linkPort : "#"},
                    { iconPort: "ridecell-logo.png" , imagePort: "ridecell.png", linkPort : "#" }
                ]),
                
            }
            
        }, 
        components:{
            ButtomPrimary,
            titleH1,
            titleH2,
            newLast,
            cardPortfolio,
            CardInsights
        } , 
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
    <!-- hero image -->
        <section class="hero-image vh-100 d-flex flex-column position-relative align-items-center w-100">
        <div class="position-relative w-100">
            <video class="vh-100 position-absolute tp-0 lft-0 w-100 object-fit-cover top-0 lef-0" src="@/assets/video/Woven-Capital-Animated.mp4" autoplay="true" muted="true" loop="true" poster=""></video>
            <div class="content-hero row align-items-start text-md-center justify-content-center m-0">
                <div class="col-12 m-0 p-0 d-flex justify-content-center flex-column">
                    <div class="mt-0 mb-5 mr-0 ml-0 p-0 w-100 align-items-start text-md-center justify-content-center">
                        <img src="../assets/image/Logo_text.png" alt="" width="325" height="45">
                    </div>
                    <title-h1 titleH1="Fueling the engine of future growth."></title-h1>
                    <buttom-primary class="d-flex justify-content-center align-items-start " text_buttom="Read our Story" link_buttom="https://nuxtjs.org/"></buttom-primary>
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

                        <title-h2 class="justify-content-center" titleH2="Meet the leaders shaping the world of tomorrow, " spanTitleH2="today"></title-h2>
                    
                        <p class="text-24 text-portfolio">Our Portfolio</p>
                        
                        <div class="d-flex m-0 p-0 w-100 justify-content-center">
                            <a href="#" class="w-100 h-100 m-0 p-0">
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
                        
                        <titleH2  class="justify-content-center" titleH2="Partner togethe"></titleH2>
                    
                        <p class="mb-4 mr-0 ml-0 p-0 text-24 text-partner">If you share our vision and your company would like to be considered for investment by Woven Capital, we want to hear from you.</p>

                        <buttom-primary class="mb-5 mr-0 ml-0 mt-0 p-0 justify-content-center align-items-start" text_buttom="Tell us about yourself" link_buttom="https://nuxtjs.org/"></buttom-primary>

                        <img src="../assets/image/partner.png" class="mt-5 mb-0 mr-0 ml-0 p-0 partner-img" alt="">
                        
                    </div>
                </div>
            </div>
        </section>
        <!-- Insights-->
        <section>
            <div class="w-100">
                <div class="content-insights m-0">
                    <template  v-for="(post, index) in posts" >
                        <card-insights
                            :key="index"
                            :titleInsights = "post.fields.title"
                            :slugInsights = "post.fields.slug"
                            :imageInsights ="(post.fields.image ) ? post.fields.image.fields.file.url : ''"
                            :dateInsights = "post.sys.createdAt"
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


