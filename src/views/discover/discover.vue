<template>
    <div class="discover-wrapper">
        <div class="viewer-title">最新单集&gt;</div>
        <div class="viewer-content"></div>
        <div class="viewer-title">用户正在关注节目&gt;</div>
        <div class="viewer-content"></div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useUserInfoStore} from '../../stores/use-userInfo-store.js';

const userInfo = computed(() => {
    return useUserInfoStore().userInfo || {}
})
</script>

<style lang="less" scoped>

</style>
