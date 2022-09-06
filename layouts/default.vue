<template>
    <div class="d-flex align-items-center m-0 flex-column">
        <!-- header -->
        <TheHeader class="content-main p-0" />
        <!-- body -->
        <Nuxt class="content-main"/>
        <!-- footer -->
        <TheFooter class="content-main"/>
    </div>
</template>
<style>
    
    @media(min-width: 768px){
        .content-main {
            width: 100%;
            padding: 0 0 0 85px;
        }
    }
    @media(max-width: 767px){
    .content-main {
            width: 100%;
            padding: 0;
        }
    }
 
</style>
