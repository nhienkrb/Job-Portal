import React from "react";
import JobBaseInfo from "./JobBaseInfo";
import JobCompany from "./JobCompany";

export default function JobContainer() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-3 px-4">
      <div className="col-span-12 sm:col-span-8">
        <JobBaseInfo />
      </div>
      <div className="col-span-12 sm:col-span-4">
        <JobCompany />
      </div>
      <div className="col-span-12 sm:col-span-12">
        <div className="grid grid-cols-12 gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="col-span-12 sm:col-span-12">
            <p className="text-lg font-bold ">Tìm Việc Làm Liên Quan</p>
          </div>
          <div className="col-span-6 sm:col-span-3 space-y-3 mt-2">
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Nhân Viên Thị Trường</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
          </div>

          <div className="col-span-12 sm:col-span-3 space-y-3 mt-2">
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Nhân Viên Thị Trường</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
          </div>

          <div className="col-span-12 sm:col-span-3 space-y-3 mt-2">
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Nhân Viên Thị Trường</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
          </div>

          <div className="col-span-12 sm:col-span-3 space-y-3 mt-2">
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Nhân Viên Thị Trường</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
            <p>
              <a href="#">Trưởng Kênh Bán Hàng</a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-12">
        <div className="grid grid-cols-12     ">
          <div className="col-span-12">
            <img
              className="w-full rounded-lg "
              src="/public/img/banner-download_app_mobile.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
