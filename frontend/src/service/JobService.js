import apiClient from "../config/axiosConfig";

export const jobService = {
  // Lấy tất cả jobs
  getAllJobs: async (page = 1) => {
    try {
      const response = await apiClient.get(`/job`, { params: { page } });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

   getJobsByFilter: async (filters = {}) => {
    try {
      const response = await apiClient.get(`/job/filter`, { params: filters });
      return response;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Lấy job by ID
  getJobById: async (id) => {
    try {
      const response = await apiClient.get(`/job/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Tạo job mới
  // createJob: async (jobData) => {
  //   try {
  //     const response = await apiClient.post("/job", jobData);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message;
  //   }
  // },

  // Cập nhật job
  updateJob: async (id, jobData) => {
    try {
      const response = await apiClient.put(`/job/${id}`, jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Xóa job
  deleteJob: async (id) => {
    try {
      const response = await apiClient.delete(`/job/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default jobService;
