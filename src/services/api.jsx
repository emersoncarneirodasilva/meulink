import axios from "axios";

export const key ="e3f65323fc0062318aba66800cbae470322ec02c";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;










