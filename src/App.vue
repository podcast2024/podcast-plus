<template>
    <div class="wrapper">
        <header>
            <div class="icon">
                <img src="./assets/img/podcast_logo.png" alt="person">
            </div>
            <div class="search-box">
                <input type="text" placeholder="请输入播单名字">
            </div>
            <div class="person-box">
                <div class="notice">
                    <img src="./assets/img/bell.png" alt="bell">
                    <span>消息</span>
                </div>
                <div class="person">
                    <img src="./assets/person.png" alt="person">
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
                <RouterView/>
            </div>
            <div class="podcast">
                <Podcast/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Podcast from './views/podcast/podcast.vue'
</script>

<style lang="less" scoped>
header {
    height: 78px;
    padding: 12px 15px 0;
    display: flex;
    justify-content: space-between;

    .icon {
        width: 100px;
        padding-top: 5px;

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
            color: #333;
            font-size: 12px;
            border-radius: 4px;
            border: 1px solid #333;
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

            img {
                width: 20px;
                height: 20px;
            }
        }

        .person {
            width: 100px;
            padding-top: 12px;
            cursor: pointer;

            img {
                width: 32px;
                height: 32px;
            }
        }
    }
}

.viewer-box {
    display: flex;
    width: 100%;

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
                color: #333;
                border: 1px solid #333;
                text-decoration: none;

                &.router-link-active {
                    font-weight: bold;
                }

                &:hover {
                    font-weight: bold;
                }
            }
        }
    }

    .viewer {
        width: 900px;
    }
}

.viewer > div {
    width: 100%;
    height: 500px;
    padding: 12px;
    border: 1px solid #000;
    font-size: 12px;
    border-radius: 10px;
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
</style>
