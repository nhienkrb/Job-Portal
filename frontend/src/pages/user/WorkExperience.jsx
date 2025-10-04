import React, { useState } from "react";

export default function WorkExperience() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "Ngành Nghề",
      company: "Nhận xét thêm một số kinh nghiệm đã có ...",
      duration: "01/2023 - 04/2023",
      isActive: false
    }
  ]);

  const [showAddExperience, setShowAddExperience] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Kinh Nghiệm Làm Việc
        </h3>
        <button 
          onClick={() => setShowAddExperience(!showAddExperience)}
          className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700"
        >
          + Thêm kinh nghiệm mới
        </button>
      </div>

      {/* Danh sách kinh nghiệm */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{exp.position}</h4>
                <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
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

      {/* Form thêm kinh nghiệm mới */}
      {showAddExperience && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Vị trí công việc"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Tên công ty"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
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
          </div>
          <textarea
            placeholder="Mô tả công việc và thành tựu..."
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Lưu
            </button>
            <button 
              onClick={() => setShowAddExperience(false)}
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
