import React from "react";

export default function FeatureUser_Component() {
  return (
    <div>
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-[#033BA0]  text-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-bold mb-2">Tính Năng Mới</h3>
          <div className="">
            <div
              className="flex  items-center  w-full rounded-lg px-3 py-2 h-20 
             bg-contain bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/phan_tich_cv.jpg)",
              }}
            >
              <span className="font-bold">Phân tích CV</span>
            </div>

            <div
              className="flex items-center justify-between rounded-lg px-3 py-2 h-20 
             bg-contain bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/tao_moi_cv.jpg)",
              }}
            >
              <span className="font-bold">Tạo CV mới</span>
            </div>

            <div
              className="flex items-center justify-between rounded-lg px-3 py-2 h-20 
             bg-contain bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/phat_trien_ban_than.jpg)",
              }}
            >
              <span className="font-bold">Phát triển bản thân</span>
            </div>

            <div
              className="flex items-center justify-between rounded-lg px-3 py-2 h-20 
             bg-contain bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url(https://jobsgo.vn/_2025/img/_profile_manage_resume/tai_len_cv.jpg)",
              }}
            >
              <span className="font-bold">Tải lên CV có sẵn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
