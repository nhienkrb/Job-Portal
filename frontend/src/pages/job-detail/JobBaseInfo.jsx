import React from "react";

export default function JobBaseInfo() {
  return (
    <div>
      {/* Title Job */}
      <div className="w-full p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        {/* <!-- Tiêu đề --> */}
        <h5 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Chủ Trì Kiến Trúc - Lương 18TR - 22TR [ HCM ]
        </h5>

        {/* <!-- Info --> */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm dark:text-gray-300 mb-6">
          {/* <!-- Mức lương --> */}
          <div className="flex items-center gap-2">
            <img src="/public/icon/salary.svg" />
            <span>
              <b>18 - 22 triệu VNĐ</b>
            </span>
          </div>

          {/* <!-- Hạn nộp --> */}
          <div className="flex items-center gap-2">
            <img src="/public/icon/date.svg" />
            <span>
              Hạn nộp: <b>08/10/2025</b>
            </span>
          </div>

          {/* <!-- Địa điểm --> */}
          <div className="flex items-center gap-2">
            <img src="/public/icon/place.svg" />
            <span>
              Địa điểm: <b>Hồ Chí Minh</b>
            </span>
          </div>
        </div>

        {/* <!-- Action Buttons --> */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-7">
            <button
              style={{
                background: "linear-gradient(to right, #216ce7, #003da6)",
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r  rounded-lg font-semibold shadow hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 "
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
              Ứng tuyển ngay
            </button>
          </div>

          <div className="col-span-12 sm:col-span-5  flex  gap-2 sm:justify-end justify-center">
            <button className="px-4 py-3 flex items-center justify-center a border border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Chat Zalo
            </button>

            <button className="px-4 py-3 border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className="px-4 py-3 border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* general information */}

      <div className="w-full p-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Thông Tin Chung
        </h5>

        {/* Grid 12 cột */}
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-700 dark:text-gray-300">
          {/* Loại hình */} {/* Ngày đăng tuyển */}
          <div className="col-span-4 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>

            <div>
              <p className="text-gray-500">Loại hình: </p>
              <p className="font-medium">Toàn thời gian</p>
            </div>
          </div>
          {/* Vị trí/chức vụ */}
          <div className="col-span-4 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <div>
              <p className="text-gray-500">Vị trí/chức vụ:</p>
              <p className="font-medium">Yêu cầu kinh nghiệm:</p>
            </div>
          </div>
          {/* Yêu cầu bằng cấp */}
          <div className="col-span-4 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>

            <div>
              <p className="text-gray-500">Yêu cầu bằng cấp:</p>
              <p className="font-medium">Cao Đẳng</p>
            </div>
          </div>
          {/* Ngành nghề */}
          <div className="col-span-4 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <div>
              <p className="text-gray-500">Ngành nghề:</p>
              <p className="font-medium text-blue-600">Kiến Trúc - Quy Hoạch</p>
            </div>
          </div>
          {/* Yêu cầu kinh nghiệm */}
          <div className="col-span-4 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <div>
              <p className="text-gray-500">Yêu cầu kinh nghiệm:</p>
              <p className="font-medium">Trên 5 năm</p>
            </div>
          </div>
        </div>

        {/* Địa điểm làm việc full width */}
        <div className="mt-6 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex items-start gap-2">
            <img src="/icon/place.svg" alt="place" className="w-5 h-5" />
            <div>
              <p className="text-gray-500">Địa điểm làm việc:</p>
              <p className="font-medium text-blue-600">Hồ Chí Minh</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                65 Lê Trung Nghĩa, Phường 12 Tân Bình, Quận Tân Bình, Hồ Chí
                Minh
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Review CV Banner  */}
      <div>
          <div className="col-span-12 sm:col-span-8 mt-5">
                <div className="col-span-12">
                  <img
                    className="w-full rounded-lg cursor-pointer animate-shrink"
                    src="/public/img/reviewCV_banner.png"
                  />
                </div>
              </div>
       </div>      

      {/* Description information */}
      <div className="w-full p-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Chi Tiết Công Việc
        </h5>
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="col-span-12 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 color-icon-general-information-job-detail"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
            <div>
              <p className="font-bold text-base">Mô tả công việc: </p>
              <p className="">
                - Tư vấn và cung cấp giải pháp tài chính, bảo hiểm phù hợp với
                nhu cầu của khách hàng. - Xây dựng và mở rộng mạng lưới khách
                hàng tiềm năng. - Mở rộng mạng lưới ứng viên tiềm năng. - Tham
                gia các chương trình đào tạo và phát triển kỹ năng của công ty.
                - Trực tiếp tạo ra doanh số bán hàng và đóng góp vào kết quả
                chung của vùng kinh doanh. - Quản lý điều hành team.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Action Buttons --> */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-7">
            <button
              style={{
                background: "linear-gradient(to right, #216ce7, #003da6)",
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r  rounded-lg font-semibold shadow hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 "
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
              Ứng tuyển ngay
            </button>
          </div>

          <div className="col-span-12 sm:col-span-5  flex  gap-2 sm:justify-end justify-center">
            <button className="px-4 py-3 flex items-center justify-center a border border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Chat Zalo
            </button>

            <button className="px-4 py-3 border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className="px-4 py-3 border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 color-icon-general-information-job-detail"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
