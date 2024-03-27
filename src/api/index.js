import axios from '@/utils/axios'

// 排行榜列表
export function getSubscribe() {
    return axios.get('/subscribeList');
}
