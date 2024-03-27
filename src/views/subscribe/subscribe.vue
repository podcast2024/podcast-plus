<template>
    <div>
        <div class="viewer-title">关注单集&gt;</div>
        <div class="viewer-content"></div>
        <div class="viewer-title">已关注节目&gt;</div>
        <div class="viewer-content"></div>
    </div>
</template>

<script setup>
import {getSubscribe} from '@/api/index.js'
import {useUserInfoStore} from '@/stores/use-userInfo-store.js';

const {updateUserInfo} = useUserInfoStore()

const update = () => {
    updateUserInfo({
        nickname: '用户昵称11111',
        phone: 11111
    })
}

// 接口请求
getSubscribe().then(res => {
    console.log('getSubscribe', res)
})
</script>

<style scoped>

</style>
