import {axiosInstance} from '../api/axiosInstance'

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
        )
    }
};

export const followAPI = {
    follow(userId) {
        return (
            axiosInstance.post(`follow/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    },
    unfollow(userId) {
        return (
            axiosInstance.delete(`follow/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    },
};

export const profileAPI = {
    getProfile(userId) {
        return (
            axiosInstance.get(`profile/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    }
};

export const headerAPI = {
    getHeader() {
        return (
            axiosInstance.get(`auth/me/`)
                .then(response => {
                    return response.data;
                })
        )
    }
};

