import { useState, useEffect, useCallback } from "react";
import { jobService } from "../service/JobService";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);


  // Lấy tất cả jobs
  const fetchJobs = useCallback(async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobService.getAllJobs(pageNum);
    setJobs(response.data.data.data || []); 
    setMeta(response.data.data); // meta là object phân trang
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tải danh sách việc làm");
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  });

  // Tạo job mới
  const createJob = async (jobData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await jobService.createJob(jobData);
      await fetchJobs(); // Refresh danh sách
      return response;
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tạo việc làm");
      console.error("Error creating job:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  return {
     jobs,
    meta,
    page,
    setPage,
    loading,
    error,
    fetchJobs,
  };
};
