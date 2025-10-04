import React, { useState } from "react";

export default function PersonalDetails({contact}) {
  const [personalInfo, setPersonalInfo] = useState({
    email: "nhienngo@email.com",
    phone: "0123456789",
    address: "TP Hồ Chí Minh",
    website: "",
    linkedin: "",
    github: "",
    objective: "Chưa có thông tin"
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Thông Tin Liên Hệ
        </h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700"
        >
          {isEditing ? "Lưu thay đổi" : "Chỉnh sửa"}
        </button>
      </div>

      {/* Thông tin liên hệ */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Email</p>
              {isEditing ? (
                <input 
                  type="email" 
                  value={contact.email}
                  className="text-sm font-medium border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  onChange={(e) => setPersonalInfo({...contact, email: e.target.value})}
                />
              ) : (
                <p className="text-sm font-medium text-gray-800">{contact.email}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Số điện thoại</p>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={contact.phone}
                  className="text-sm font-medium border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  onChange={(e) => setPersonalInfo({...contact, phone: e.target.value})}
                />
              ) : (
                <p className="text-sm font-medium text-gray-800">{contact.phone}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Địa chỉ</p>
              {isEditing ? (
                <input 
                  type="text" 
                  value={contact.address}
                  className="text-sm font-medium border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  onChange={(e) => setPersonalInfo({...contact, address: e.target.value})}
                />
              ) : (
                <p className="text-sm font-medium text-gray-800">{contact.address}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mục tiêu nghề nghiệp */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h4 className="text-md font-semibold text-gray-800">Mục Tiêu Nghề Nghiệp</h4>
          </div>
          {isEditing ? (
            <textarea
              value={contact.introduction}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mô tả mục tiêu nghề nghiệp của bạn..."
              onChange={(e) => setPersonalInfo({...contact, introduction: e.target.value})}
            />
          ) : (
            <p className="text-sm text-gray-600 leading-relaxed">{contact.introduction}</p>
          )}
        </div>
      </div>
    </div>
  );
}
