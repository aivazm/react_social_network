import {axiosInstance} from '../api/axiosInstance'

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
    }
};

export const headerAPI = {
    getHeader() {
        return axiosInstance.get(`auth/me/`)
    }
};

