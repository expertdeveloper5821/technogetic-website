import axios, { AxiosResponse, AxiosError } from "axios";
// import { createApiError } from "./ApiError";

const baseUrl = "https://technogetic.com/wp-json/";
const CONTACT_API = `${baseUrl}contact-form-7/v1/contact-forms`;

const baseURL = "http://localhost:3000";
const version = "v1";

export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}wp/v2/posts`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blog posts: " + (error as Error).message);
  }
};

export const postFormData = async (
  endpoint: string,
  formData: FormData
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.post(`${CONTACT_API}${endpoint}`, formData);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle AxiosError for more specific error information
      throw new Error('Error in API response');
    } else {
      // Handle other types of errors
      throw new Error('Unknown error in API response');
    }
  }
};


// export const fetchPageData = async (id: string) => {
//   try {
//     const response = await axios.get(`${baseURL}/${version}/getPagesById?pageId=${id}`);
    
//     return response.data;
//     // console.log("response",response.data)
//   } catch (error) {
//     console.error('Error fetching page data:', error);
//     throw error; // Propagate the error so that the calling code can handle it
//   }
// };

export const getByIdApi = async (baseURL: string, version: string, pageId: string) => {
  try {
    const response = await axios.get(`${baseURL}/${version}/getPagesById`, {
      params: { pageId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    throw new Error('Failed to fetch data by ID');
  }
};

