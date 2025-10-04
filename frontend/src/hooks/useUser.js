// useUser.js
import { useCallback, useEffect, useState } from "react";
import userService from "../service/UserService";

export const useUser = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userService.getProfile();
      setUser(response?.data?.data || response?.data?.data?.data || []);
      setProfile(response?.data?.profile || response?.data?.data?.profile || []);
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi tải dữ liệu cá nhân");
      console.error("Error fetching fetchUser profile Data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user, profile, loading, error, refetch: fetchUser };
};

export default useUser;
