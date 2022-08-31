<script setup>
    defineProps({
        textLink: String, 
        linkLink: String, 
    });
</script>
<template>
    <li class="list-item text-decoration-none text-center">
        <a class="text-decoration-none content-text-menu" :href="linkLink">{{textLink}}</a>
    </li>
</template>
<style>

</style>
