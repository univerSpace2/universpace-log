import axios from "axios";
import type { Post } from "../lib/types";

const BASE_URL = "http://localhost:8000/posts";

class PostsApi {
  static async getPosts(): Promise<Post[]> {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
  static async getPost(id: number) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async createPost(post: Post) {
    try {
      const response = await axios.post(BASE_URL, post);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async updatePost(id: number, post: Post) {
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, post);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async deletePost(id: number) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default PostsApi;
