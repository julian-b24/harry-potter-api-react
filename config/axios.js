import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.potterdb.com/v1'
})

export default instance