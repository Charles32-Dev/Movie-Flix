import axios from "axios";

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '2df37ca64cc29f48965593a395f272d8',
        language: 'pt-BR',
        page: 1,

    }

})

export default api