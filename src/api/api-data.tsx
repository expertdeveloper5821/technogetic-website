import axios from "axios";

const baseUrl = "https://technogetic.com/wp-json/";
// Get all Blog
export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}wp/v2/posts`); 
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching blog posts: " + error.message);
  }
};


export const CONTACT_API =`${baseUrl}contact-form-7/v1/contact-forms/10881/feedback`;