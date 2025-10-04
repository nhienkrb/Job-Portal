import React, { useState } from "react";

export default function EducationHistory() {
  const [educations, setEducations] = useState([
    {
      id: 1,
      degree: "University Of Transport HCM University",
      major: "Bằng cấp, Chuyên ngành: Software development",
      duration: "Năm tốt nghiệp: 2014-12",
      status: "completed"
    },
    {
      id: 2,
      degree: "FPT College",
      major: "Bằng cấp, Chuyên ngành: Software development",
      duration: "Năm tốt nghiệp: 2013-10",
      status: "completed"
    },
    {
      id: 3,
      degree: "F8",
      major: "Bằng cấp, Chuyên ngành: Fullstack & Co",
      duration: "Chưa hoàn thành",
      status: "in_progress"
    }
  ]);

  const [showAddEducation, setShowAddEducation] = useState(false);

  const getStatusColor = (status) => {
    return status === "completed" ? "text-green-600" : "text-orange-600";
  };

  const getStatusIcon = (status) => {
    if (status === "completed") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Quá Trình Học Tập
        </h3>
        <button 
          onClick={() => setShowAddEducation(!showAddEducation)}
          className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700"
        >
          + Thêm quá trình học tập
        </button>
      </div>

      {/* Danh sách học vấn */}
      <div className="space-y-4">
        {educations.map((edu) => (
          <div key={edu.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                  {getStatusIcon(edu.status)}
                </div>
                <p className="text-sm text-gray-600 mb-1">{edu.major}</p>
                <p className={`text-xs ${getStatusColor(edu.status)}`}>{edu.duration}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button className="text-blue-600 text-xs hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button className="text-red-600 text-xs hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form thêm học vấn mới */}
      {showAddEducation && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Tên trường/Tổ chức"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Chuyên ngành"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <input
              type="date"
              placeholder="Ngày bắt đầu"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              placeholder="Ngày kết thúc"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="completed">Đã hoàn thành</option>
              <option value="in_progress">Đang học</option>
            </select>
          </div>
          <textarea
            placeholder="Mô tả thêm (tùy chọn)..."
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Lưu
            </button>
            <button 
              onClick={() => setShowAddEducation(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400"
            >
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
