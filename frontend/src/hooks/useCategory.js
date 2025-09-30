import { useEffect, useState } from "react";
import categoryService from "../service/CategoryService";

export const useCategory = () => {
  const [category, setCategory] = useState([]);
  const [countJobs, setCountJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hàm fetch chung
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cats, counts] = await Promise.all([
        categoryService.getAllCategory(),
        categoryService.countJobsByCategory(),
      ]);
      setCategory(cats.data || cats);
      setCountJobs(counts.data || counts);
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tải dữ liệu danh mục");
      console.error("Error fetching Category Data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Gọi API 1 lần khi mount
  useEffect(() => {
    fetchData();
  }, []);

  return {
    category,
    countJobs,
    loading,
    error,
    refetch: fetchData, // cho phép gọi lại khi cần
  };
};

export default useCategory;
