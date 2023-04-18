import axios from 'axios';

const backUrl = 'http://localhost:3001';

export const loginRequest = async (username: string, role: string) => {
  try {
    const response = await axios.post(`${backUrl}/login`, { username, role });
    return response.data;
    
  } catch (error) {
    return '';
  }

};

export const servicesRequest = async (employeeID: string) => {
  try {
    const response = await axios.get(`${backUrl}/services/${employeeID}`);
    return response.data;
    
  } catch (error) {
    return '';
  }

};

export const createCustomerRequest = async (username: string, role: string) => {
  try {
    const response = await axios.post(`${backUrl}/register`, { username, role });
    return response.data;
    
  } catch (error) {
    return '';
  }

};