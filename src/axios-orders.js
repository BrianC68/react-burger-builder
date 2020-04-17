import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-97d6d.firebaseio.com/'
});

export default instance;
