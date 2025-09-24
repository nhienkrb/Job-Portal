import React from "react";

// Dữ liệu chart (mock)
const dataRecruiting = [
  { date: "24/07", jobs: 35000 },
  { date: "25/07", jobs: 34000 },
  { date: "26/07", jobs: 33000 },
  { date: "27/07", jobs: 31000 },
  { date: "28/07", jobs: 32000 },
  { date: "29/07", jobs: 36000 },
  { date: "21/09", jobs: 20000 },
];

const dataNewJobs = [
  { date: "24/07", jobs: 1500 },
  { date: "25/07", jobs: 1600 },
  { date: "26/07", jobs: 1700 },
  { date: "27/07", jobs: 500 },
  { date: "28/07", jobs: 600 },
  { date: "29/07", jobs: 1800 },
  { date: "21/09", jobs: 1000 },
];

// Ngành nghề nổi bật
const categories = [
  {
    id: 1,
    name: "Kinh Doanh",
    jobs: "11K+",
    color: "bg-blue-100 text-blue-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic1.svg",
    bg_color: "#eaf4fc",
  },
  {
    id: 2,
    name: "Nhân Sự",
    jobs: "1.9K+",
    color: "bg-red-100 text-red-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic2.svg",
    bg_color: "#eaf4fc",
  },
  {
    id: 3,
    name: "Luật",
    jobs: "510+",
    color: "bg-purple-100 text-purple-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic3.svg",
    bg_color: "#f4efff",
  },
  {
    id: 4,
    name: "Kế Toán",
    jobs: "4.1K+",
    color: "bg-orange-100 text-orange-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic4.svg",
    bg_color: "#fff2e6",
  },
  {
    id: 5,
    name: "Công Nghệ",
    jobs: "1.9K+",
    color: "bg-blue-100 text-blue-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic5.svg",
    bg_color: "#f3ffe4",
  },
  {
    id: 6,
    name: "Marketing",
    jobs: "3.8K+",
    color: "bg-green-100 text-green-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic6.svg",
    bg_color: "#f4efff",
  },
  {
    id: 7,
    name: "Tài Chính",
    jobs: "2.2K+",
    color: "bg-orange-100 text-orange-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic7.svg",
    bg_color: "#eaf4fc",
  },
  {
    id: 8,
    name: "Sản Xuất",
    jobs: "3.8K+",
    color: "bg-gray-100 text-gray-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic8.svg",
    bg_color: "#f4f4f4",
  },
  {
    id: 9,
    name: "Logistics",
    jobs: "3.8K+",
    color: "bg-green-100 text-green-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic9.svg",
    bg_color: "#eaffef",
  },
  {
    id: 10,
    name: "Nhà Hàng",
    jobs: "1.4K+",
    color: "bg-pink-100 text-pink-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic10.svg",
    bg_color: "#fff0f0",
  },
  {
    id: 11,
    name: "Thiết Kế",
    jobs: "2.4K+",
    color: "bg-purple-100 text-purple-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic11.svg",
    bg_color: "#f6f2ff",
  },
  {
    id: 12,
    name: "Y Tế",
    jobs: "800+",
    color: "bg-pink-100 text-pink-600",
    icon: "https://jobsgo.vn/_2025/img/home/ic12.svg",
    bg_color: "#ffeaf4",
  },
];

export default function JobTraining() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Banner */}

      {/* Ngành nghề nổi bật */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Ngành Nghề Nổi Bật
          </h2>
          <button className="text-blue-600 font-medium hover:underline">
            Xem thêm &gt;
          </button>
        </div>

        <div className="grid grid-cols-12  gap-4  mt-6">
          {categories.map((cat) => (
            <div
            style={{background:cat.bg_color}}
              key={cat.id}
              className=" col-span-12 sm:col-span-4 md:col-span-2 lg:col-span-2 rounded-xl p-4 text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div
                className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${cat.color}`}
              >
                <img src={cat.icon} alt={cat.name} className="w-10 h-10" />
              </div>
              <p className="mt-2 font-medium">{cat.name}</p>
              <p className="text-sm text-gray-500">{cat.jobs} Việc làm</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
