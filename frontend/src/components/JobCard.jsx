import React from "react";
// import { Heart } from "lucide-react"; // icon tim

const JobCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      {/* Top: Logo + Heart */}
      <div className="flex  items-start mb-3">
        {/* Logo */}
        <img
          src="https://media.jobsgo.vn/media/img/employer/34-200x200.jpg?v=1752028536"
          alt="Company Logo"
          className="w-20 h-20 rounded-lg object-contain mr-4"
        />
        <div>
          {/* Job info */}
          <h3 className="font-bold text-red-600 text-base leading-snug mb-1">
            Bác Sĩ Nha Khoa (Nha Khoa Tổng Quát)
          </h3>
          <p className="text-sm text-gray-600 mb-2">JobsGO</p>

          <p className="text-sm text-blue-600 font-medium">12 - 20 triệu VNĐ</p>
          <p className="text-sm text-gray-500">
            Hồ Chí Minh, Bà Rịa - Vũng Tàu,...
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-between items-center ">
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
            Full-time
          </span>
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
            Dưới 2 năm
          </span>
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
            15 phút trước
          </span>
        </div>
        {/* Heart button */}
        <button className="text-gray-400 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
