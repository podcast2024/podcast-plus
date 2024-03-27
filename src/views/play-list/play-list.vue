<template>
    <div class="play-list-wrapper">
        <div class="viewer-content"></div>
        <div class="viewer-content"></div>
        <div class="viewer-content"></div>
        <div class="viewer-content"></div>
    </div>
</template>

<script>
export default {
    name: "play"
}
</script>

<style scoped lang="less">
.play-list-wrapper {
    overflow-y: scroll;

    .viewer-content {
        margin-bottom: 24px;
    }
}
</style>
