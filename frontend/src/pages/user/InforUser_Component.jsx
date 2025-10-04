import React, { use, useEffect, useMemo, useState } from "react";
import InformationBoard_Component from "./InformationBoard_Component";
import ListCVUpLoad_Component from "./ListCVUpLoad_Component";
import ProfessionalSkills from "./ProfessionalSkills";
import WorkExperience from "./WorkExperience";
import EducationHistory from "./EducationHistory";
import PersonalDetails from "./PersonalDetails";
import useUser from "../../hooks/useUser";
import { useToast } from "../../context/ToastContext";
import apiClient from "../../config/axiosConfig";

export default function InforUser_Component() {
  const [formData, setFormData] = useState({});
  const [showNameInput, setShowNameInput] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { user, profile, loading, error, refetch } = useUser();
  const { showSuccess, showError } = useToast();
  useEffect(() => {
    setFormData({
      fullName: profile.full_name || "",
      position: profile.education_level || "Nhân Viên/Chuyên Viên",
      jobStatus: profile.isLookingFor ? "Đang tìm việc" : "Không tìm việc",
      jobTitle: "Fresher",
      updatedAt: profile.updated_at,
      birthday: profile.date_of_birth,
    });
  }, [profile]);
  const skills = useMemo(
    () => (Array.isArray(profile?.skills) ? profile.skills : []),
    [profile?.skills]
  );
const contact = useMemo(() => {
  return {
    email: user?.email || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
    introduction: profile?.introduction || ""
  };
}, [user, profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    if (!profile?.id) {
      showError("Không tìm thấy thông tin hồ sơ");
      return;
    }

  //   setIsSaving(true);
  //   try {
  //     // Chuẩn bị dữ liệu để gửi lên server
  //     const updateData = {
  //       full_name: formData.fullName,
  //       education_level: formData.position,
  //       isLookingFor: formData.jobStatus === "Đang tìm việc",
  //       date_of_birth: formData.birthday,
  //       gender: formData.gender === "Nam" ? "male" : formData.gender === "Nữ" ? "female" : "other"
  //     };

  //     // Gọi API cập nhật profile
  //     await apiClient.put(`/user/profile/${profile.id}`, updateData);
      
  //     // Cập nhật lại dữ liệu local
  //     await refetch();
      
  //     showSuccess("Cập nhật hồ sơ thành công!");
  //     setShowNameInput(false);
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     showError("Có lỗi xảy ra khi cập nhật hồ sơ. Vui lòng thử lại!");
  //   } finally {
  //     setIsSaving(false);
  //   }
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-5">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={
                "https://yt3.ggpht.com/8qTuL3i_HQlzANxoUYgrYYMa_OqZI1NyeQ2UpS9_Buij8ZnXpQhO1IjG9qtMjvCZ20owGg2-bzw=s48-c-k-c0x00ffffff-no-rj"
              }
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thông tin cơ bản */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                className={`shadow-xs border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5
                  ${showNameInput ? "bg-gray-50" : "bg-gray-100"}`}
                placeholder="Name"
                required
                disabled={showNameInput}
              />
              <button
                type="button"
                onClick={() => {
                  if (showNameInput) {
                    handleSaveProfile();
                  } else {
                    setShowNameInput(true);
                  }
                }}
                disabled={isSaving}
                className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? "Đang lưu..." : showNameInput ? "Lưu" : "Sửa"}
              </button>
            </h2>

            <button 
              onClick={handleSaveProfile}
              disabled={isSaving}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17h2M12 12v5m0 0V9m0 5h-2m0 0h4"
                />
              </svg>
              {isSaving ? "Đang cập nhật..." : "Cập Nhật Hồ Sơ"}
            </button>
            <p className="mt-2 text-gray-600 text-sm">
              Mức độ hoàn thiện hồ sơ:{" "}
              <span className="text-blue-600 font-semibold">80%</span>
            </p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold">Ngày sinh:</label>
            <input
              type="text"
              name="birthday"
              value={formData.birthday || ""}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold">Chức vụ:</label>
            <input
              type="text"
              name="position"
              value={formData.position || ""}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold block">Giới tính:</label>
            <select
              id="gioi-tinh"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={
                "block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold">Trạng thái:</label>
            <select
              id="trang-thai"
              name="jobStatus"
              value={formData.jobStatus}
              onChange={handleChange}
              className={
                "block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
            >
              <option value="Đang tìm việc">Đang tìm việc</option>
              <option value="Đã có việc">Đã có việc</option>
              <option value="Không tìm việc">Không tìm việc</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold">Chức danh công việc:</label>
            <select
              id="chuc-danh"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={
                "block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
            >
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Leader">Leader</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-nowrap">
            <label className="font-semibold">Cập nhật:</label>
            <input
              type="text"
              name="updatedAt"
              disabled
              value={
                formData.updatedAt
                  ? new Date(formData.updatedAt).toLocaleDateString("vi-VN")
                  : ""
              }
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 mt-5">
        <InformationBoard_Component informationBoard={{job_count:user.job_count, job_save:user.job_save}} />
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 mt-5">
        <ListCVUpLoad_Component />
      </div>

      {/* Kỹ năng chuyên môn */}
      <div className="mt-5">
        <ProfessionalSkills skills={skills || []} />
      </div>

      {/* Kinh nghiệm làm việc */}
      <div className="mt-5">
        <WorkExperience />
      </div>

      {/* Quá trình học tập */}
      <div className="mt-5">
        <EducationHistory />
      </div>

      {/* Thông tin liên hệ */}
      <div className="mt-5">
        <PersonalDetails contact={contact} />
      </div>
    </div>
  );
}
