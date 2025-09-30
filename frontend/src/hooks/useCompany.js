import { useEffect, useState, useCallback } from "react";
import CompanyService from "../service/CompanyService";

export const useCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hàm fetch chung
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CompanyService.countJobsByCompany();
      // Tuỳ thuộc vào cấu trúc response từ API
      setCompanies(response.data || response);
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tải dữ liệu công ty");
      console.error("Error fetching Company Data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Gọi API 1 lần khi mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    companies, // Đổi tên từ countJobs sang companies cho rõ nghĩa
    loading,
    error,
    refetch: fetchData, // cho phép gọi lại khi cần
  };
};

export default useCompany;