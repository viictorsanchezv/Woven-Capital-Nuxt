<script setup>
    import {ref} from "vue";
    import itemLink from "./ListItem.vue";

    const itemsFooter = [
        { textLink: 'About', linkLink: '/about'  },
        { textLink: 'Portfolio', linkLink: '#'  },
        { textLink: 'Team', linkLink: '#'  },
        { textLink: 'Insights', linkLink: '#'  },
        { textLink: 'Pitch', linkLink: '/pitch'  },
        { textLink: 'Contact', linkLink: '#'  },
        { textLink: 'Woven Planet', linkLink: '#'  },
        { textLink: 'Privacy Notice', linkLink: '#'  },
    ];
</script>
<template>
    <footer class="bg-footer d-flex justify-content-center w-100">			
        <div class="row align-items-start m-0  content-footer w-100">
            <div class="col-md-8 m-0 p-0 ">
                <ul class="list-group justify-content-evenly list-group-horizontal-md list-unstyled m-0 p-0">
                  <item-link 
                    v-for="(itemFooter, index) in itemsFooter"
                    :key="index"
                    :textLink = "itemFooter.textLink"
                    :linkLink = "itemFooter.linkLink">
                    </item-link>
                </ul>
            </div>
            <div class="col-md-4 m-0 p-0 text-md-end">
                <span class="w-100 content-text">Woven Capital Management Company, LLC © 2022</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    .content-footer{
        padding: 25px;
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
        color: var( --color-white );
    }
</style>