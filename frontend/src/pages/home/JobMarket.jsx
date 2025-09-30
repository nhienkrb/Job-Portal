import React from "react";
import useCategory from "../../hooks/useCategory";
import IsError from "../../components/IsError";
import CategorySkeleton from "../../components/CategorySkeleton";

// Dữ liệu mẫu (icon, màu, background)
const sampleCategories = [
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic1.svg",
    color: "bg-blue-100 text-blue-600",
    bg_color: "#eaf4fc",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic2.svg",
    color: "bg-red-100 text-red-600",
    bg_color: "#eaf4fc",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic3.svg",
    color: "bg-purple-100 text-purple-600",
    bg_color: "#f4efff",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic4.svg",
    color: "bg-orange-100 text-orange-600",
    bg_color: "#fff2e6",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic5.svg",
    color: "bg-blue-100 text-blue-600",
    bg_color: "#f3ffe4",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic6.svg",
    color: "bg-green-100 text-green-600",
    bg_color: "#f4efff",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic7.svg",
    color: "bg-orange-100 text-orange-600",
    bg_color: "#eaf4fc",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic8.svg",
    color: "bg-gray-100 text-gray-600",
    bg_color: "#f4f4f4",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic9.svg",
    color: "bg-green-100 text-green-600",
    bg_color: "#eaffef",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic10.svg",
    color: "bg-pink-100 text-pink-600",
    bg_color: "#fff0f0",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic11.svg",
    color: "bg-purple-100 text-purple-600",
    bg_color: "#f6f2ff",
  },
  {
    icon: "https://jobsgo.vn/_2025/img/home/ic12.svg",
    color: "bg-pink-100 text-pink-600",
    bg_color: "#ffeaf4",
  },
];

export default function JobMarket() {
  const { loading, error, countJobs, refetch } = useCategory();

  if (loading) {
    return <CategorySkeleton />;
  }

  if (error) {
    return <IsError error={error} onRetry={refetch} />;
  }

  // Merge dữ liệu API với dữ liệu mẫu
  const mergedCategories = countJobs.map((cat, index) => {
    const sample = sampleCategories[index];
    return {
      ...cat,
      ...sample, // merge icon, màu, bg
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
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

        <div className="grid grid-cols-12 gap-4 mt-6">
          {mergedCategories.map((cat) => (
            <div
              style={{ background: cat.bg_color }}
              key={cat.id}
              className="col-span-12 sm:col-span-4 md:col-span-2 lg:col-span-2 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div
                className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full ${cat.color}`}
              >
                <img src={cat.icon} alt={cat.name} className="w-10 h-10" />
              </div>
              <p className="mt-2 font-medium">{cat.name}</p>
              <p className="text-sm text-gray-500">{cat.jobs_count} Việc làm</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
