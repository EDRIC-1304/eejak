import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const auth = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),
  
  signup: (name, email, password) =>
    apiClient.post('/auth/signup', { name, email, password }),
  
  getCurrentUser: () =>
    apiClient.get('/auth/me'),
};

// Contact API calls
export const contact = {
  updateContactDetails: (contactData) =>
    apiClient.put('/contact', contactData),
};

// Project Enquiry API calls
export const projectEnquiry = {
  createEnquiry: (enquiryData) =>
    apiClient.post('/project-enquiries', enquiryData),
};

export default apiClient;
