import axios from 'axios';
import {useSelector} from 'react-redux';
import {getToken} from '../features/auth/authSlice';

const API_BASE_URL = 'https://example.com/api';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = useSelector(getToken);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
