import React from "react";
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb";
import JobCard from "../../components/JobCard";

export default function Candidate_Viewed() {
  return (
    <div className="bg-[#F5F5F5] p-4">
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-4 m">
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

          <div className="col-span-4">
            <JobCard />
          </div>
          <div className="col-span-4">
            <JobCard />
          </div>
          <div className="col-span-4">
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}
