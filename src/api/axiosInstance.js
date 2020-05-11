import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "9712e13b-e93f-4d8e-9679-af3d1bcb1b3d"}
});