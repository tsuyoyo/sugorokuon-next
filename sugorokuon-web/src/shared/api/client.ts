import axios from 'axios';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
