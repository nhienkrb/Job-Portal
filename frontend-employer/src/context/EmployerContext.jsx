import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";

const EmployerContext = createContext();

export const useEmployer = () => {
  const context = useContext(EmployerContext);
  if (!context) {
    throw new Error("useEmployer must be used within an EmployerProvider");
  }
  return context;
};

export const EmployerProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalApplications: 0,
    totalCandidates: 0,
  });

  // Load employer data
  useEffect(() => {
    const loadEmployerData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
          apiClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;

          // Load user profile
          const userResponse = await apiClient.get("/employer/profile");
          setUser(userResponse?.data?.data || userResponse?.data?.data?.data || []);

          // // Load company data
          // const companyResponse = await apiClient.get("/company/me");
          // setCompany(companyResponse.data.data);

          // // Load stats
          // const statsResponse = await apiClient.get("/employer/stats");
          // setStats(statsResponse.data.data);
        }
      } catch (error) {
        console.error("Error loading employer data:", error);
        // localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    loadEmployerData();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      const { token, user } = response.data.data;

      localStorage.setItem("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(user);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data || error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete apiClient.defaults.headers.common["Authorization"];
    setUser(null);
    setCompany(null);
  };

  const updateCompany = (companyData) => {
    setCompany((prev) => ({ ...prev, ...companyData }));
  };

  const addJob = (job) => {
    setJobs((prev) => [job, ...prev]);
  };

  const updateJob = (jobId, jobData) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, ...jobData } : job))
    );
  };

  const deleteJob = (jobId) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
  };

  const value = {
    user,
    company,
    loading,
    jobs,
    candidates,
    stats,
    login,
    logout,
    updateCompany,
    addJob,
    updateJob,
    deleteJob,
    setJobs,
    setCandidates,
    setStats,
  };

  return (
    <EmployerContext.Provider value={value}>
      {children}
    </EmployerContext.Provider>
  );
};
