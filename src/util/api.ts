import axios from 'axios';
import { API_URL } from '../constants/api';

export const TermiiApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const setSecretKey = async (secretKey: string) => {
    try {
        TermiiApi.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
    } catch {
        throw new Error('Error occurred when setting secret key')
    }
}