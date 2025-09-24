import React from "react";

export default function InformationBoard_Component() {
  return (
    <div>
      {/* Thông tin chi tiết */}
      <div className="">
        <div className="text-lg font-bold space-y-3">
          <p> Bảng thông tin</p>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4">
          {/* View */}
          <div className="col-span-6 sm:col-span-3 ">
            <div className="flex items-center">
              <div className="rounded-full bg-[#E8F3FC] p-2 text-[#033BA0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div className="mx-3">
                <p className="text-sm font-semibold text-[#959595]">
                  Lượt Xem
                </p>
                <p className="text-2xl font-bold ">123</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center">
              <div className="rounded-full bg-[#E8F3FC] p-2 text-[#033BA0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
              <div className="mx-3">
                <p className="text-sm font-semibold text-[#959595]">
                 Tin Nhắn
                </p>
                <p className="text-2xl font-bold ">123</p>
              </div>
            </div>
          </div>

          {/*Applied  Position  */}
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center">
              <div className="rounded-full bg-[#E8F3FC] p-2 text-[#033BA0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
              </div>
              <div className="mx-3">
                <p className="text-sm font-semibold text-[#959595]">
                  Việc ứng tuyển
                </p>
                <p className="text-2xl font-bold ">123</p>
              </div>
            </div>
          </div>

          {/*  Saved Job*/}
          <div className="col-span-6 sm:col-span-3">
            <div className="flex items-center">
              <div className="rounded-full bg-[#E8F3FC] p-2 text-[#033BA0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
              <div className="mx-3">
                <p className="text-sm font-semibold text-[#959595]">
                 Việc đã lưu
                </p>
                <p className="text-2xl font-bold ">123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
