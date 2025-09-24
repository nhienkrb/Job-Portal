import React from "react";
// import { Heart } from "lucide-react"; // icon tim

const CompanyCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      {/* Top: Logo + Heart */}
      <div className="flex  items-start mb-3">
        {/* Logo */}
        <img
          src="https://media.jobsgo.vn/media/img/employer/173-200x200.jpg"
          alt="Company Logo"
          className="w-20 h-20 rounded-lg object-contain mr-4"
        />
        <div>
          {/* Job info */}
          <h3 className="font-bold text-base leading-snug mb-1">
            Bác Sĩ Nha Khoa (Nha Khoa Tổng Quát)
          </h3>
          <p className="text-sm text-gray-600 mb-2">JobsGO</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-between items-center ">
        <div className="bg-[#F1F7FF] rounded">
          <p className="text-sm px-3 py-1 rounded-lg  text-[#00379D]">
          <span className="text-[#00379D] font-bold ">244</span> việc làm đang tuyển
          </p>
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
