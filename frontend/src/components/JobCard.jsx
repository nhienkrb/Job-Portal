import React, { useState } from "react";
import format from "../utils/formatters";
const JobCard = ({ job }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // Xử lý click favorite
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  // Xử lý click card
  const handleCardClick = () => {
    window.location.href = `/job/${job.id}`;
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Top: Logo + Heart */}
      <div className="flex items-start mb-3">
        {/* Logo công ty */}
        <img
          src={job.company?.banner_company_url || "/icon/img_icon.png"}
          alt={job.company?.name}
          className="w-20 h-20 rounded-lg object-contain mr-4 border border-gray-200"
        />

        <div className="flex-1 min-w-0">
          {/* Tiêu đề công việc */}
          <h3 className="font-bold text-red-600 text-base leading-snug mb-1 line-clamp-2 hover:text-red-700 ">
            {job.title} 
          </h3>

          {/* Tên công ty */}
          <p className="text-sm text-gray-600 mb-2 truncate">
            {job.company?.name}
          </p>

          {/* Lương */}
          <p className="text-sm text-blue-600 font-medium">
            {format.formatSalary(job.min_salary, job.max_salary)}
          </p>

          {/* Địa điểm */}
          <p className="text-sm text-gray-500 truncate">{job.location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-between items-center">
        <div className="flex  gap-2 mt-3">
          {/* Loại hình việc làm */}
          {job.employment_type && (
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
              {format.formatEmploymentType(job.employment_type)}
            </span>
          )}

          {/* Kinh nghiệm */}
          {job.level && (
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
              {format.formatExperience(job.level)}
            </span>
          )}

          {/* Thời gian đăng */}
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-lg text-gray-600">
            {format.getTimeAgo(job.created_at)}
          </span>
        </div>

        {/* Heart button */}
        <button
          className={`ml-2 transition-colors ${
            isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
          onClick={handleFavoriteClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isFavorite ? 0 : 1.5}
              d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
