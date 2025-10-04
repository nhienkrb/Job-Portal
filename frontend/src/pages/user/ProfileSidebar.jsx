import React from "react";

export default function ProfileSidebar() {
  return (
    <div className="space-y-5">
      {/* Tính năng mới */}
      <div className="bg-[#033BA0] text-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold mb-4">Tính Năng Mới</h3>
        <div className="space-y-3">
          <div
            className="flex items-center w-full rounded-lg px-3 py-2 h-16 
           bg-contain bg-center bg-no-repeat text-black cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/phan_tich_cv.jpg)",
            }}
          >
            <span className="font-bold text-sm">Phân tích CV</span>
          </div>

          <div
            className="flex items-center w-full rounded-lg px-3 py-2 h-16 
           bg-contain bg-center bg-no-repeat text-black cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/tao_moi_cv.jpg)",
            }}
          >
            <span className="font-bold text-sm">Tạo CV mới</span>
          </div>

          <div
            className="flex items-center w-full rounded-lg px-3 py-2 h-16 
           bg-contain bg-center bg-no-repeat text-black cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/phat_trien_ban_than.jpg)",
            }}
          >
            <span className="font-bold text-sm">Phát triển bản thân</span>
          </div>

          <div
            className="flex items-center w-full rounded-lg px-3 py-2 h-16 
           bg-contain bg-center bg-no-repeat text-black cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage:
                "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/tai_len_cv.jpg)",
            }}
          >
            <span className="font-bold text-sm">Tải lên CV có sẵn</span>
          </div>
        </div>
      </div>

      {/* Kết nối và chia sẻ */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Kết Nối & Chia Sẻ</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Chia sẻ lên Twitter</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Chia sẻ lên LinkedIn</span>
          </button>
        </div>
      </div>

      {/* Gợi ý việc làm */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Việc Làm Phù Hợp</h3>
        <div className="space-y-3">
          <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">Software Developer</h4>
            <p className="text-xs text-gray-600 mb-2">ABC Company</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-600">15-25 triệu</span>
              <span className="text-xs text-gray-500">2 ngày trước</span>
            </div>
          </div>
          
          <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">Frontend Developer</h4>
            <p className="text-xs text-gray-600 mb-2">XYZ Tech</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-600">12-20 triệu</span>
              <span className="text-xs text-gray-500">3 ngày trước</span>
            </div>
          </div>
          
          <button className="w-full text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
            Xem thêm việc làm →
          </button>
        </div>
      </div>
    </div>
  );
}
