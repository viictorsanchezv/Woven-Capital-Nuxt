<script >
    import itemLink from "@/components/ListItem.vue";
    import { footerData } from "@/data/data.js";
    export default {
        data(){
            return {
                itemsFooter : footerData
            }
        },
        components: {
            itemLink,
        }
    }
    

</script>
<template>
    <footer class="bg-footer d-flex justify-content-center w-100">			
        <div class="row align-items-start m-0  content-footer w-100">
            <div class="col-md-8 m-0 p-0 footer-items">
                <ul class="list-group justify-content-evenly list-group-horizontal-md list-unstyled m-0 p-0">
                  <item-link 
                    v-for="(itemFooter, index) in itemsFooter"
                    :key="index"
                    :textLink = "itemFooter.textLink"
                    :linkLink = "itemFooter.linkLink">
                    </item-link>
                </ul>
            </div>
            <div class="col-md-4 company">
                <span class="w-100 content-text">Woven Capital Management Company, LLC © 2022</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    footer .company .content-text{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .bg-footer{
        background-color: var( --color--secondary );
    }
    footer .list-item{
        margin: 0px 8px;
    }
    footer .list-item .content-text:hover{
        color: var(--bg--primary);
    }
    footer .content-text{
        text-align: right;
        color: var( --color-white );
        
    }
    footer .company{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-end;
        text-align: right;
    }
     @media(min-width:1280px){
        .content-footer{
            padding: 25px 42px;
        } 
    }
    @media(max-width:1280px){
        .content-footer{
            padding: 25px 32px;
        } 
    }
    @media(max-width:1300px){
        .footer-items, .company{
            width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
            justify-content: center;
            display: flex;
        }
        .company .content-text{
            text-align: center;
            margin-top: 20px;
        }
    }
    @media(max-width:768px){
        footer ul.list-group {
            display: flex;
            flex-direction: unset;
            flex-wrap: wrap;
        }
        footer ul.list-group li{
            width: 50%;
            display: flex;
        }
        .content-footer{
            padding: 40px;
        }
        footer .company {
            text-align: center;
            margin-top: 10px;
            max-width: 300px;
        }
        .content-footer[data-v-50f6c8a1] {
            padding: 25px 60px;
        }
    }
   
</style>