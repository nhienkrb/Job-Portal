import React from "react";
import JobCard from "../../components/JobCard";

export default function SortFilter() {
  return (
    <div className="px-4 grid grid-cols-12 gap-4 max-w-screen-xl   mx-auto ">
      <div className="mt-5 col-span-9">
        {/* Desktop: Radio buttons (hidden on mobile) */}
        <div className="flex justify-between">
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
                Phù hợp
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
                Việc mới đăng
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                value="moi-cap-nhat"
                name="display-option"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-3"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mới cập nhật
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-4"
                type="radio"
                value="luong-cao"
                name="display-option"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-4"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lương cao
              </label>
            </div>
          </div>
          <div className=" items-center text-md gap-2 text-nowrap">
            Việc 1 - 50 / 20670
          </div>
        </div>
        {/* Mobile: Select box (hidden on desktop) */}
        <div className="md:hidden w-full">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="viec-moi-dang"
          >
            <option value="phu-hop">Phù hợp</option>
            <option value="viec-moi-dang">Việc mới đăng</option>
            <option value="moi-cap-nhat">Mới cập nhật</option>
            <option value="luong-cao">Lương cao</option>
          </select>
        </div>

        <div className=" grid grid-cols-12 gap-4">
          <div className="mt-5 col-span-6">
            <JobCard />
          </div>
          <div className="mt-5 col-span-6">
            <JobCard />
          </div>
          <div className="mt-5 col-span-6">
            <JobCard />
          </div>
          <div className="mt-5 col-span-6">
            <JobCard />
          </div>
          <div className="mt-5 col-span-6">
            <JobCard />
          </div>
        </div>
      </div>

      <div className=" mt-5 col-span-3 items-start space-y-5">
        <div className="rounded-md">
          <img
            className="rounded-md"
            src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/TD-VIETNAM-1.png"
          />
        </div>
        <div className="rounded-md">
          <img
            className="rounded-md"
            src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/08/CareerViet-Vuo%CC%82n-1.jpg"
          />
        </div>
        {/* Tìm theo ngành nghề */}
        <div>
          <div class="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tìm Theo Ngành Nghề
            </h6>
            <ul class="custom-scroll cursor-pointer w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto h-[300px]">
              <li class="w-full px-4 py-2  rounded-t-lg dark:border-gray-600">
                Kinh Doanh/Bán Hàng
              </li>
              <li class="w-full px-4 py-2  dark:border-gray-600">
                Hành Chính/Văn Phòng
              </li>
              <li class="w-full px-4 py-2  dark:border-gray-600">
                Kế Toán/Kiểm Toán
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Marketing/PR/Quảng Cáo
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Sản Xuất/Lắp Ráp/Chế Biến
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
            </ul>
          </div>
        </div>

        {/* Tìm theo địa điểm */}
        <div>
          <div class="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tìm Theo Ngành Nghề
            </h6>
            <ul class="custom-scroll cursor-pointer w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto h-[300px]">
              <li class="w-full px-4 py-2  rounded-t-lg dark:border-gray-600">
                Kinh Doanh/Bán Hàng
              </li>
              <li class="w-full px-4 py-2  dark:border-gray-600">
                Hành Chính/Văn Phòng
              </li>
              <li class="w-full px-4 py-2  dark:border-gray-600">
                Kế Toán/Kiểm Toán
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Marketing/PR/Quảng Cáo
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Sản Xuất/Lắp Ráp/Chế Biến
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>{" "}
              <li class="w-full px-4 py-2 rounded-b-lg">
                Xây Dựng/Kiến Trúc/Nội Thất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
