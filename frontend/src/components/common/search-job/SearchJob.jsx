import React, { useState, useEffect, useRef } from "react";
import useCategory from "../../../hooks/useCategory";
import { useSearchParams } from "react-router-dom";

export default function SearchJob() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const { loading, error, countJobs, category, refetch } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const dropdowns = [
    {
      id: "name",
      label: "Ngành nghề",
      icon: (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      id: "type",
      label: "Loại Hình",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
          />
        </svg>
      ),
    },
    {
      id: "salary",
      label: "Mức lương",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      id: "position",
      label: "Chức vụ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    {
      id: "exp",
      label: "Kinh nghiệm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
    },
    {
      id: "education",
      label: "Học vấn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
  ];
  const dropdownContent = {
    name: category,
    type: [
      { label: "Toàn thời gian", value: "full_time" },
      { label: "Bán thời gian", value: "part_time" },
    ],
    salary: [
      { label: "Dưới 10 triệu", value: "0-10000000" },
      { label: "10-15 triệu", value: "10000000-15000000" },
      { label: "15-20 triệu", value: "15000000-20000000" },
      { label: "20-30 triệu", value: "20000000-30000000" },
      { label: "Trên 30 triệu", value: "30000000-999999999" },
    ],
    position: [
      { label: "Thực Tập", value: "Thực Tập" },
      { label: "Nhân viên", value: "Nhân Viên" },
      { label: "Chuyên viên", value: "Chuyên Viên" },
      { label: "Trưởng nhóm", value: "Trưởng Nhóm" },
      { label: "Quản lý", value: "Quản Lý" },
      { label: "Giám đốc", value: "Giám Đốc" },
    ],
    exp: [
      { label: "Chưa có kinh nghiệm", value: "0-0" },
      { label: "Dưới 1 năm", value: "0-1" },
      { label: "1-3 năm", value: "1-3" },
      { label: "3-5 năm", value: "3-5" },
      { label: "Trên 5 năm", value: "5-99" },
    ],
    education: [
      { label: "Trung Cấp", value: "Trung Cấp" },
      { label: "Cao đẳng", value: "Cao Đẳng" },
      { label: "Đại học", value: "Đại Học" },
      { label: "Thạc sĩ", value: "Thạc Sĩ" },
      { label: "Tiến sĩ", value: "Tiến Sĩ" },
    ],
    sort: [
      { label: "Mới nhất", value: "created" },
      { label: "Lương cao nhất", value: "salary" },
      { label: "Kinh nghiệm thấp → cao", value: "exp" },
    ],
  };

  return (
    <div className="max-w-screen-xl items-center justify-between mx-auto p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl">
      {/* Search Box */}
      <div
        style={{ background: "#B4DEFA", padding: 12 }}
        className="rounded-lg"
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="flex-1 flex items-center bg-white rounded-lg border border-gray-200 p-1">
            <label className="mr-2 font-semibold text-sm ml-1">Từ khóa:</label>
            <input
              type="text"
              placeholder="Việc, công ty, ngành nghề..."
              className="border-0 focus:ring-0 text-sm text-gray-700 placeholder-gray-400 flex-1"
            />
          </div>

          <div className="flex-1 flex items-center bg-white rounded-lg border border-gray-200 p-1">
            <label className="mr-2 font-semibold text-sm ml-1">Địa điểm:</label>
            <input
              type="text"
              placeholder="Tỉnh/thành, quận..."
              className="border-0 focus:ring-0 text-sm text-gray-700 placeholder-gray-400 flex-1"
            />
          </div>
          <button
            type="button"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            TÌM VIỆC
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {dropdowns.map((dropdown) => (
            <div
              key={dropdown.id}
              className="flex-1 min-w-[120px] max-w-[200px] relative"
            >
              <button
                type="button"
                onClick={() => toggleDropdown(dropdown.id)}
                className="w-full flex items-center justify-center bg-[rgba(36,102,201,1)] hover:bg-[#417ED3] gap-1 rounded-full px-3 py-2 text-white text-sm whitespace-nowrap"
                style={{ lineHeight: "0px" }}
              >
                {dropdown.icon}
                {dropdown.label}
                <svg
                  className={`w-3 h-3 ml-1 transition-transform ${
                    activeDropdown === dropdown.id ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === dropdown.id && (
                <div
                  ref={(el) => (dropdownRefs.current[dropdown.id] = el)}
                  className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 overflow-auto max-h-[250px] custom-scroll"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {dropdownContent[dropdown.id]?.map((item, index) => (
                      <li key={item.id || index}>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            const value = item.value || item.name || item;
                            searchParams.set(dropdown.id, value);
                            setSearchParams(searchParams);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.label || item.name || item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
