import axiosInstance from "../config/axiosConfig";

export const userService = {
  getProfile: async () => {
    try {
      const response = await axiosInstance.get("/user/me");
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default userService;
