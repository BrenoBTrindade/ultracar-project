import axios from 'axios';

const backUrl = 'http://localhost:3001';

export const createServiceRequest = async (username:string, carModel:string, employeeId:string, description:string, totalPrice:string,) => {
  console.log(employeeId);
  
  try {
    const response = await axios.post(`${backUrl}/services`, { username, carModel, employeeId, description, totalPrice});
      console.log(response)
    return response;
    
  } catch (error) {
    return '';
  }

};