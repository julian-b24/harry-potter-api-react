import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.potterdb.com/'
})

export default instance