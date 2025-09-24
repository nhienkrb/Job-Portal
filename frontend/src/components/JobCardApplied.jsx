import React from "react";

export default function JobCardApplied() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-4 m">
        {/* Bộ lọc phía trên */}
        <div className="col-span-12 text-2xl font-bold mb-4">
          <p>Việc làm đã ứng tuyển</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4  bg-white rounded-lg shadow-md p-5">
        <div className="col-span-12 flex flex-wrap gap-2 mb-2">
          {[
            "Tất cả",
            "Hồ Sơ Phù Hợp",
            "Liên Hệ Ứng Viên",
            "Mời Phỏng Vấn",
            "Gửi Offer",
            "Tuyển Thành Công",
            "Từ chối",
          ].map((label, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full font-medium border ${
                i === 0
                  ? "bg-white text-color-primary"
                  : "bg-white text-color-primary hover:text-color-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="col-span-12 flex  gap-2">
          <div className="hidden md:flex items-center gap-6">
            <p className="text-2xl md:text-sm text-gray-900 dark:text-white ">
              Hiển thị
            </p>
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value="phu-hop"
                name="display-option"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Cũ Nhất
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value="viec-moi-dang"
                name="display-option"
                defaultChecked
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mới nhất
              </label>
            </div>
          </div>
        </div>
        {/* Mobile: Select box (hidden on desktop) */}
        <div className="md:hidden col-span-12 w-full">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="viec-moi-dang"
          >
            <option value="moi-nhat">Mới Nhất</option>
            <option value="cu-nhat">Củ Nhất</option>
          </select>
        </div>
        {/* Job Card 2 */}
        <div className="col-span-12 lg:col-span-6">
          <div className="border rounded-lg p-4 border-gray-200  ">
            <div className="flex gap-3">
              <img
                src="https://jobsgo.vn/media/img/employer/12345-avatar.png"
                alt="logo"
                className="w-16 h-16 rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-black">
                  Lập Trình Viên - IT (Remote)
                </h3>
                <p className="text-gray-600 text-sm">
                  CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ C - SOFT
                </p>
                <div className="flex flex-wrap gap-2 mt-1 text-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    Hà Nội, Hồ Chí Minh
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    Thỏa thuận
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    03/09/2025
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    Toàn thời gian
                  </span>
                </div>
                <p className="mt-2 text-sm text-black">
                  Ngày ứng tuyển: <b>04/09/2025</b>{" "}
                  <span className="text-green-600">Mới ứng tuyển</span>
                </p>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-blue-600 text-sm underline">
                    CV Ứng tuyển: CV - CV_NGO_NHIEN_Fresher_PHP
                  </a>
                  <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-500 rounded hover:bg-red-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hủy bỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
