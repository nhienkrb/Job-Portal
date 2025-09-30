import apiClient from "../config/axiosConfig";

export const CompanyService = {
  countJobsByCompany: async () => {
    try {
      const response = await apiClient.get("/company/job-counts");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
export default CompanyService;
