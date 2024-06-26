import axios from 'axios'

const request = axios.create({
    baseURL: '192.168.0.1',
})

request.interceptors.response.use(
    (response) => {
	window.response = response

	if (response.status === 200 && response.data.code === 200) {
	    return response.data
	}
	return Promise.reject(response)
    },
    (error) => {
	return error
    },
)

export default request
