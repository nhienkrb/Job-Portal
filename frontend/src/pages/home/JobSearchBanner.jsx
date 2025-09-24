import React from "react";

export default function JobSearchBanner() {
  return (
    <div
      className=" flex justify-center items-start"
      style={{
        background: `linear-gradient(
          90deg,
          rgb(0, 97, 203) 0%,
          rgb(0, 102, 180) 20%,
          rgb(0, 80, 184) 40%,
          rgb(0, 65, 165) 60%,
          rgb(0, 42, 135) 80%,
          rgb(1, 20, 109) 100%
        )`,
      }}
    >
      <div className="w-full max-w-7xl p-6">
        {/* Thanh search */}
        <div className="flex gap-2 bg-white rounded-lg shadow-md p-2">
          <input
            type="text"
            placeholder="Từ khóa: Việc, công ty, ngành nghề..."
            className="flex-1 p-2 border-none outline-none"
          />
          <input
            type="text"
            placeholder="Địa điểm: Tỉnh/thành, quận..."
            className="flex-1 p-2 border-none outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md">
            TÌM VIỆC
          </button>
        </div>

        <div className="grid grid-cols-12  gap-4  mt-6">
          {/* Sidebar ngành nghề */}
          <div className="col-span-12 md:col-span-2  bg-white  rounded-lg shadow-md p-4 ">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-lg">☰</span> NGÀNH NGHỀ
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">
                Mỹ Phẩm/Spa/Làm Đẹp
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Truyền Hình/Báo Chí
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Sáng Tạo/Nghệ Thuật
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Nông/Lâm/Ngư Nghiệp
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Dệt May/Da Giày/Thời Trang
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Ngành Nghề Khác
              </li>
            </ul>
          </div>

          {/* Banner chính */}
          <div className="col-span-12 md:col-span-8 rounded-lg ">
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-60 overflow-hidden rounded-lg md:h-72">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/08/Tin-TD-Concentrix-700x250-01-01-scaled.jpg" className="absolute block w-full" alt="..."/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="https://jobsgo.vn/uploads/banner/banner_home_sacombank.jpg" className="absolute block w-full" alt="..."/>
                    </div>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

          </div>

          {/* Sidebar phải */}
          <div className="col-span-12 md:col-span-2 flex-col gap-4">
            <div className="bg-white rounded-lg shadow-md  text-center mb-4">
              {/* <h4 className="font-semibold">TẠO CV TỰ ĐỘNG CHỈ 2 PHÚT</h4>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">
                TẠO CV NGAY
              </button> */}
              <img src="https://jobsgo.vn/_2025/img/home/banner1.webp"/>
            </div>
            <div className="bg-white rounded-lg shadow-md  text-center">
              {/* <h4 className="font-semibold">ĐÁNH GIÁ CV JOBSGO AI</h4>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">
                TẢI LÊN CV
              </button> */}
                <img className="rounded-lg" src="https://jobsgo.vn/_2025/img/home/banner2.webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
