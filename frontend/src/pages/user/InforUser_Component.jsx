import React from "react";
import InformationBoard_Component from "./InformationBoard_Component";
import ListCVUpLoad_Component from "./ListCVUpLoad_Component";

export default function InforUser_Component() {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-5">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://media.jobsgo.vn/uploads/thumb/img/male_thumb_300.jpg?v=1758217894" // thay bằng link ảnh user
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thông tin cơ bản */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Ngo Nhien</h2>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-1">
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
              Cập Nhật Hồ Sơ
            </button>
            <p className="mt-2 text-gray-600 text-sm">
              Mức độ hoàn thiện hồ sơ:{" "}
              <span className="text-blue-600 font-semibold">80%</span>
            </p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
          <p>
            <span className="font-semibold">Ngày sinh:</span> 03/01/2003
          </p>
          <p>
            <span className="font-semibold">Chức vụ:</span> Nhân Viên/Chuyên
            Viên
          </p>
          <p>
            <span className="font-semibold">Giới tính:</span> Nam
          </p>
          <p>
            <span className="font-semibold">Trạng thái tìm việc:</span>
            <span className="text-green-600 font-semibold ml-1">
              Đang tìm việc
            </span>
          </p>
          <p>
            <span className="font-semibold">Chức danh công việc:</span> Freshser
          </p>
          <p>
            <span className="font-semibold">Ngày cập nhật:</span> 24/09/2025
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 mt-5">
        <InformationBoard_Component />
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 mt-5">
        <ListCVUpLoad_Component />
      </div>
    </div>
  );
}
