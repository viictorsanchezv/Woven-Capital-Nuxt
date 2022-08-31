<script setup>

    defineProps({
        textDesd: String
    });
</script>

<template>
    
    <div class="d-flex m-0 w-100 justify-content-center">
        <p class="fw-normal m-0 desc-text">{{textDesd}}</p>
    </div>
</template>

<style scoped>
.desc-text{
    font-size: 24px;
    line-height: 38px;
    width: 54%;
}
</style>