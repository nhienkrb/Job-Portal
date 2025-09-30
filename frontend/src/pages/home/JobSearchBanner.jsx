import React from "react";
import useCategory from "../../hooks/useCategory";
import IsError from "../../components/isError";

export default function JobSearchBanner() {
  const { category, loading, error, fetchCategory } = useCategory();
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
        <div className="flex gap-2 bg-white rounded-lg shadow-md p-2 flex-wrap">
          <input
            type="text"
            placeholder="Từ khóa: Việc, công ty, ngành nghề..."
            className="flex-1 p-2 border-none outline-none "
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
          <div className="col-span-12 md:col-span-2  bg-white  rounded-lg shadow-md pt-4 pl-4  pb-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-lg">☰</span> NGÀNH NGHỀ
            </h3>
            <div className="overflow-auto custom-scroll  h-[210px] ">
              {error ? (
                <IsError error={error} onRetry={fetchCategory} />
              ) : loading ? (
                <div role="status" className="text-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                  <p>Loading....</p>
                </div>
              ) : (
                <ul className="space-y-0 text-sm">
                  {category.map((categoryItem) => (
                    <li
                      key={categoryItem.id}
                      className="hover:text-blue-600 cursor-pointer border-b border-gray-100 last:border-b-0 py-1 "
                    >
                      {categoryItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Banner chính */}
          <div className="col-span-12 md:col-span-8 rounded-lg ">
            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              <div className="relative h-60 overflow-hidden rounded-lg md:h-72">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/08/Tin-TD-Concentrix-700x250-01-01-scaled.jpg"
                    className="absolute block w-full"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <img
                    src="https://jobsgo.vn/uploads/banner/banner_home_sacombank.jpg"
                    className="absolute block w-full"
                    alt="..."
                  />
                </div>
              </div>
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
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
              <img src="https://jobsgo.vn/_2025/img/home/banner1.webp" />
            </div>
            <div className="bg-white rounded-lg shadow-md  text-center">
              {/* <h4 className="font-semibold">ĐÁNH GIÁ CV JOBSGO AI</h4>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">
                TẢI LÊN CV
              </button> */}
              <img
                className="rounded-lg"
                src="https://jobsgo.vn/_2025/img/home/banner2.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
