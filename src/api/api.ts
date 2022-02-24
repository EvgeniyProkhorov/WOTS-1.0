import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7fab9c0c-9c53-4cc5-93aa-0354526c382f'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }

export const unfollowAxios = (userID: number) => {
    return instance.delete(`follow/${userID}`)
}

export const followAxios = (userID: number) => {
    return instance.post(`follow/${userID}`)
}


export const authMe = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)

}

export const getProfile = (userID: string = '2') => {
    return instance.get(`profile/${userID}`)
}