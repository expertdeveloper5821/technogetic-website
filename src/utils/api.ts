import axios from 'axios';


const baseURL = "http://localhost:3000";
const version = "v1";


const apiUrl = 'http://localhost:3000'; // Replace with your API endpoint

export const getDataById = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/${version}/getPagesById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};