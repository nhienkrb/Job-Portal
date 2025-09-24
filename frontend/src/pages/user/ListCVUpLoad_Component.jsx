import React from "react";

export default function ListCVUpLoad_Component() {
  return (
    <div>
      {/* Thông tin chi tiết */}
      <div className="">
        <div className="text-lg font-bold space-y-3 flex justify-between items-center">
          <p>Danh sách CV đã tải lên</p>
          <div>
            <button
              type="button"
              className="text-sm font-medium text-white cursor-pointer flex items-center rounded-xl p-2"
              style={{
                background: "linear-gradient(270deg, #00379d 0, #2466c9 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Tải CV Lên
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 sm:col-span-6">
            <div className="border border-gray-300 rounded-sm">
                asd
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
              asd
          </div>
        </div>
      </div>
    </div>
  );
}
