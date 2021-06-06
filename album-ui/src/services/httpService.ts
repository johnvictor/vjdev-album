import axios from 'axios';
import { IUser } from '../store/reducers/users';

const registerUserHttp = (payload: IUser) => {
    return axios.post('http://localhost:5000/api/register', payload);
};

export {
    registerUserHttp
};