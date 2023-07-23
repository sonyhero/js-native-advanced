import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '9f7af09a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance(`?apikey=${key}&t=${title}`)
            .then(res=> res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance(`?apikey=${key}&t=${title}&type=${type}`)
            .then(res=>res.data)
    }
};


export default API;
