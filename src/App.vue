<template>
    <div class="wrapper">
        <header>
            <div @click="toHomePage" class="icon">
                <img src="./assets/img/podcast_logo.png" alt="person">
                <span>播客+++</span>
            </div>
            <div class="search-box">
                <el-input v-model="searchText" style="width: 320px;margin-right: 8px;" placeholder="请输入播单名字"/>
                <el-button @click="search" type="primary">搜索</el-button>
            </div>
            <div class="person-box">
                <div class="notice">
                    <img src="./assets/img/bell.png" alt="bell">
                    <span>消息</span>
                </div>
                <div class="person">
                    <el-menu
                        font-size="10"
                        class="el-menu"
                        mode="horizontal"
                        :ellipsis="false"
                        @select="handleSelect"
                    >
                        <el-sub-menu index="2">
                            <template #title>
                                <img src="./assets/person.png" alt="person">
                            </template>
                            <el-menu-item index="0">我的主页</el-menu-item>
                            <el-menu-item index="1">我的消息</el-menu-item>
                            <el-menu-item index="2">个人设置</el-menu-item>
                            <el-menu-item index="3">会员计划</el-menu-item>
                            <el-menu-item index="4">退出登录</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </div>
            </div>
        </header>
        <div class="viewer-box">
            <div class="aside">
                <nav>
                    <RouterLink to="/">发现</RouterLink>
                    <RouterLink to="/subscribe">关注</RouterLink>
                    <RouterLink to="/list">播单</RouterLink>
                    <RouterLink to="/history">历史</RouterLink>
                </nav>
            </div>
            <div class="viewer">
                <transition name="el-zoom-in-top">
                    <RouterView/>
                </transition>
            </div>
            <div class="podcast">
                <Podcast/>
            </div>
        </div>
        <el-dialog v-model="searchResultVisible" title="搜索结果" width="800" height="600">
            <div class="search-result"></div>
        </el-dialog>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Podcast from './views/podcast/podcast.vue'
import {useRouter} from 'vue-router'

const router = useRouter();
const searchText = ref('')
const searchResultVisible = ref(false)
const handleSelect = (index) => {
    console.log('handleSelect', index)
}
const search = () => {
    searchResultVisible.value = true;
}

const toHomePage = () => {
    router.push('/')
}
</script>

<style lang="less" scoped>
.wrapper {
    height: 100%;
}

header {
    height: 78px;
    padding: 12px 15px 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .icon {
        width: 120px;
        padding-top: 5px;
        display: flex;
        align-items: center;
        color: #409EFF;

        img {
            width: 48px;
            height: 48px;
        }
    }

    .search-box {
        margin-top: 10px;

        input {
            width: 300px;
            height: 36px;
            padding: 0 15px;
            color: #409EFF;
            font-size: 12px;
            border-radius: 4px;
            border: 1px solid #409EFF;
        }
    }

    .person-box {
        width: 200px;
        display: flex;

        .notice {
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            cursor: pointer;
            color: #409EFF;

            img {
                width: 20px;
                height: 20px;
            }
        }

        .person {
            width: 100px;
            cursor: pointer;
            font-size: 12px;

            img {
                width: 28px;
                height: 28px;
            }
        }
    }
}

.viewer-box {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);

    .aside {
        width: 120px;
        margin: 12px 0;

        nav {
            display: flex;
            flex-direction: column;
            padding-top: 24px;

            a {
                display: inline-block;
                width: 88px;
                height: 36px;
                line-height: 36px;
                margin-bottom: 36px;
                font-size: 12px;
                text-align: center;
                color: #409EFF;
                border: 1px solid #409EFF;
                text-decoration: none;
                border-radius: 3px;

                &:hover,
                &.router-link-active {
                    background: #409EFF;
                    color: #FFF;
                }
            }
        }
    }

    .viewer {
        width: 900px;
        margin-right: 12px;
    }
}

.viewer > div {
    width: 100%;
    height: 100%;
    padding: 12px;
    border: 1px solid #409EFF;
    font-size: 12px;
    border-radius: 6px;
}

::-webkit-scrollbar {
    width: 5px; /* 滚动条整体宽度 */
    height: 5px; /* 对于垂直滚动条来说是高度 */
}

::-webkit-scrollbar-track { /* 滚动条轨道背景 */
    background-color: #f2f2f2;
    border-radius: 2px;
}

::-webkit-scrollbar-thumb { /* 滚动条滑块 */
    background-color: #999; /* 滑块的颜色 */
    border-radius: 2.5px;
}

::-webkit-scrollbar-thumb:hover { /* 滑块悬停时的样式 */
    background-color: #666; /* 更深的颜色以增强交互反馈 */
}

.search-result {
    height: 300px;
}
</style>
