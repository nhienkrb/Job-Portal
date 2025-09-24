import React from "react";

const JobCard = ({ logo, title, company, location, salary, highlight }) => {
  return (
    <div className="flex items-start gap-3  last:border-none py-3">
      {/* Logo */}
      <img
        src={logo}
        alt="Company Logo"
        className="w-14 h-14 rounded-md object-cover"
      />

      {/* Content */}
      <div className="flex-1">
        <h3
          className={`text-sm font-semibold leading-snug ${
            highlight ? "text-red-600" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500 truncate">{company}</p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
            {location}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
            {salary}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function JobCardCompany() {
  const jobs = [
    {
      logo: "https://media.jobsgo.vn/media/img/employer/235506-200x200.jpg?v=1754035059",
      title: "Quản Lý Kinh Doanh Thu Nhập Từ 20 Triệu +++ (Bình Dương)",
      company: "Công Ty Bảo Việt Nhân Thọ Bình Dương",
      location: "Bình Dương",
      salary: "20 - 50 triệu VNĐ",
      highlight: true,
    },
    {
      logo: "https://media.jobsgo.vn/media/img/employer/235506-200x200.jpg?v=1754035059",
      title: "Quản Lý Kinh Doanh Thu Nhập Hấp Dẫn (Bình Dương)",
      company: "Công Ty Bảo Việt Nhân Thọ Bình Dương",
      location: "Bình Dương",
      salary: "20 - 50 triệu VNĐ",
      highlight: false,
    },
    {
      logo: "https://media.jobsgo.vn/media/img/employer/235506-200x200.jpg?v=1754035059",
      title: "Quản Lý Kinh Doanh Thu Nhập Hấp Dẫn (Bình Dương)",
      company: "Công Ty Bảo Việt Nhân Thọ Bình Dương",
      location: "Bình Dương",
      salary: "20 - 50 triệu VNĐ",
      highlight: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Việc Làm Cùng Công Ty</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Xem tất cả →
        </button>
      </div>
      {jobs.map((job, idx) => (
        <JobCard key={idx} {...job} />
      ))}
    </div>
  );
}
