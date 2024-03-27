<template>
    <div>
        <div>历史页面</div>
        <el-button type="primary" @click="back">返回首页</el-button>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = new useRouter();
const back = () => {
    router.push('/')
}
</script>

<style scoped>

</style>
