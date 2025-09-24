import React from "react";

const jobs = [
  {
    id: 1,
    logo: "https://media.jobsgo.vn/media/img/employer/100621-200x200.jpg?v=1758006547",
    title: "Nhân Viên Tư Vấn - Chăm Sóc Khách Hàng (Đi Làm Ngay)",
    company: "Công Ty TNHH Bảo Hiểm Nhân Thọ Generali",
    salary: "15 - 40 triệu VND",
    location: "Hồ Chí Minh",
    tags: ["Full-time", "Không yêu cầu"],
    time: "2 giờ trước",
  },
  {
    id: 2,
    logo: "https://media.jobsgo.vn/media/img/employer/176841-200x200.jpg?v=1758277205",
    title: "Trưởng Nhóm Kinh Doanh Ô Tô Kia (Đã Có Kinh Nghiệm Bán Hàng)",
    company: "Mazda Láng Hạ",
    salary: "20 - 50 triệu VND",
    location: "Hà Nội",
    tags: ["Full-time", "Không yêu cầu"],
    time: "3 giờ trước",
  },
  {
    id: 3,
    logo: "https://media.jobsgo.vn/media/img/employer/249701-200x200.jpg?v=1756095043",
    title: "Trưởng Nhóm Kinh Doanh Ô Tô Kia (Đã Có Kinh Nghiệm Bán Hàng)",
    company: "Mazda Láng Hạ",
    salary: "20 - 50 triệu VND",
    location: "Hà Nội",
    tags: ["Full-time", "Không yêu cầu"],
    time: "3 giờ trước",
  },
  {
    id: 4,
    logo: "https://media.jobsgo.vn/media/img/employer/270126-200x200.jpg?v=1753669965",
    title: "Trưởng Nhóm Kinh Doanh Ô Tô Kia (Đã Có Kinh Nghiệm Bán Hàng)",
    company: "Mazda Láng Hạ",
    salary: "20 - 50 triệu VND",
    location: "Hà Nội",
    tags: ["Full-time", "Không yêu cầu"],
    time: "3 giờ trước",
  },
];

export default function JobList() {
  return (
    <div
      className="py-8"
      style={{
        background:
          "linear-gradient(90deg, rgb(209, 238, 252) 0%, rgb(229, 246, 254) 20%, rgb(236, 247, 253) 40%, rgb(224, 245, 253) 60%, rgb(236, 247, 253) 80%, rgb(237, 248, 255) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Việc Tuyển Gấp</h2>
          <button className="text-blue-600 font-medium hover:underline">
            Xem thêm &gt;
          </button>
        </div>

        {/* Grid job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4 hover:shadow-md transition"
            >
              {/* Logo */}
              <img
                src={job.logo}
                alt={job.company}
                className="w-16 h-16 rounded object-cover"
              />

              {/* Job Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 line-clamp-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">{job.company}</p>

                {/* Salary + Location */}
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="text-blue-600 font-medium">
                    {job.salary}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{job.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Time */}
                <p className="text-xs text-gray-400 mt-2">{job.time}</p>
              </div>

              {/* Heart button */}
              <button className="text-gray-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                page === 2
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
