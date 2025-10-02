import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { jobService } from "../service/jobService";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  const fetchJobs = useCallback(async (pageNum = 1) => {
    setLoading(true);
    setError(null);

    try {
      // Convert query string → object để truyền vào API
      const filters = Object.fromEntries(searchParams.entries());
      filters.page = pageNum; // thêm page
      let response;
      if (Object.keys(filters).length > 1) {
        // Có filter → gọi filter API
        response = await jobService.getJobsByFilter(filters);
      } else {
        // Không có filter → gọi all jobs
        response = await jobService.getAllJobs(pageNum);
      }
      setJobs(response.data.data.data || response.data.data || []);
      setMeta(response.data.data);
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tải danh sách việc làm");
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchJobs(page);
  }, [page, searchParams]);

  return { jobs, meta, page, setPage, loading, error, fetchJobs ,setJobs};
};
