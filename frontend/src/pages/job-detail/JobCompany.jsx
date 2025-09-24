import React from "react";
import JobCardCompany from "../../components/JobCardCompany";

export default function JobCompany() {
  return (
    <>
      <div className="w-full bg-white rounded-lg shadow p-0 overflow-hidden">
        <div>
          {/* Cover image */}
          <div
            className="relative w-full h-28 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage:
                "url('https://media.jobsgo.vn/media/img/employer/56288-cover-app.jpg?v=1613979940')",
            }}
          ></div>
          {/* Content */}
          <div className="p-4">
            {/* Logo + Name */}
            <div className="flex items-start gap-3">
              <img
                src="https://media.jobsgo.vn/media/img/employer/56288-200x200.jpg?v=1613979940"
                alt="Logo"
                className="w-20 h-20 rounded-lg border border-gray-300 bg-white -mt-8 relative z-10"
              />
              <h2 className="text-base font-semibold leading-snug">
                Công Ty TNHH Thiết Kế Xây Dựng Liên Việt
              </h2>
            </div>

            {/* Field */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h10v6H4z"
                />
              </svg>
              <span className="text-gray-500">Lĩnh vực:</span>
              <span className="font-medium text-gray-800">Kinh doanh</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full bg-white rounded-lg shadow p-0 overflow-hidden">
        <JobCardCompany />
      </div>
    </>
  );
}
