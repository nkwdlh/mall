import axios from "axios";

export default function (config){
    let axiosInstance = axios.create({
        baseURL: 'http://localhost:8082/',
        timeout: 2000
    });

    axiosInstance.interceptors.response.use(resp => {
        return resp.data
    },err => {
        return '数据请求失败！'
    })

    return axiosInstance(config)
}
