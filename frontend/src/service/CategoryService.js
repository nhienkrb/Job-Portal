import apiClient from "../config/axiosConfig";

export const categoryService = {
  getAllCategory: async () => {
    try {
      const response = await apiClient.get("/category/category-by-name");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  countJobsByCategory: async () => {
    try {
      const response = await apiClient.get("/category/job-counts");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
export default categoryService;
