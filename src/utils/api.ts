import axios from 'axios';


const baseURL = "http://localhost:3000";
const version = "api";


// export const getDataById = async (pageId: string) => {
//   try {
//     const response = await axios.get(`${baseURL}/${version}/getPagesById/${pageId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

export const fetchDataById = async <T>(pageId: string): Promise<T> => {
  try {
    const response = await axios.get<T>(`${baseURL}/${version}/getPagesById/${pageId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};