import axios from 'axios';

const backUrl = 'http://localhost:3001';

export const createServiceRequest = async (username:string, carModel:string, employeeId:string, description:string, totalPrice:string,) => {
  console.log(employeeId);
  
  try {
    const response = await axios.post(`${backUrl}/services`, { username, carModel, employeeId, description, totalPrice});
    return response;
    
  } catch (error) {
    return '';
  }

};

export const partsRequest = async () => {

  try {
    const response = await axios.get(`${backUrl}/parts`);
    return response.data.data;
    
  } catch (error) {
    return '';
  }

};