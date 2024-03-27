import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref({
	nickname: '用户昵称',
	phone: 1388888888,
    })

    const updateUserInfo = (value = {}) => {
	userInfo.value = value;
    }

    return {
	userInfo,
	updateUserInfo
    }
})
