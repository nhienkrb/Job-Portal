import React, { useMemo, useState } from "react";

export default function ProfessionalSkills({ skills: incomingSkills }) {
  const [showAddSkill, setShowAddSkill] = useState(false);

  const skills = useMemo(() => {
    if (Array.isArray(incomingSkills) && incomingSkills.length > 0) {
      // Map from API: each item has name and pivot.experience_years
      return incomingSkills.map((s, idx) => ({
        id: s.id ?? idx,
        name: s.name,
        level: "",
        years: s?.pivot?.experience_years != null ? `${s.pivot.experience_years} năm` : "",
      }));
    }
    return [
      { id: 1, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năm" },
      { id: 2, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năm" },
      { id: 3, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năm" },
      { id: 4, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năm" },
      { id: 5, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năm" },
      { id: 6, name: "Tên kỹ năng có kinh nghiệm", level: "Thành thạo", years: "1 năng" },
    ];
  }, [incomingSkills]);

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Kỹ Năng Chuyên Môn
        </h3>
        <button 
          onClick={() => setShowAddSkill(!showAddSkill)}
          className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700"
        >
          + Thêm kỹ năng mới
        </button>
      </div>

      {/* Danh sách kỹ năng */}
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">{skill.name}</p>
                <p className="text-xs text-gray-500">{skill.level} • {skill.years}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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
        ))}
      </div>

      {/* Form thêm kỹ năng mới */}
      {showAddSkill && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Tên kỹ năng"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Mức độ</option>
              <option>Cơ bản</option>
              <option>Khá</option>
              <option>Thành thạo</option>
              <option>Xuất sắc</option>
            </select>
            <input
              type="text"
              placeholder="Số năm kinh nghiệm"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Lưu
            </button>
            <button 
              onClick={() => setShowAddSkill(false)}
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
