import axios from "axios";

const baseUrl = "https://technogetic.com/wp-json/wp/v2";


// Get all Blog
export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`); 
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching blog posts: " + error.message);
  }
};


