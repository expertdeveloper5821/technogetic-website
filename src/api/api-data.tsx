import axios, { AxiosResponse } from "axios";
import { createApiError } from "./ApiError";

const baseUrl = "https://technogetic.com/wp-json/";
//conatct us post api
const CONTACT_API = `${baseUrl}contact-form-7/v1/contact-forms`; // Replace with your actual base URL

// Get all Blog
export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}wp/v2/posts`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching blog posts: " + error.message);
  }
};


//contact us post api
export const postFormData = async (
  endpoint: string,
  formData: FormData
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.post(`${CONTACT_API}${endpoint}`, formData);
    return response;
  } catch (error: any) {
    // Specify the type of the error object (any for simplicity, replace with a more specific type if needed)
    throw createApiError('Error in API response', 500);
  }
};
