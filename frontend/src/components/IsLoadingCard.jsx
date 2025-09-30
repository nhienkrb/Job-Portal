import React from "react";

export default function IsLoadingCard() {
  return (
    <div
      className="py-8"
      style={{
        background:
          "linear-gradient(90deg, rgb(209, 238, 252) 0%, rgb(229, 246, 254) 20%, rgb(236, 247, 253) 40%, rgb(224, 245, 253) 60%, rgb(236, 247, 253) 80%, rgb(237, 248, 255) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Việc Tuyển Gấp</h2>
          <button className="text-blue-600 font-medium hover:underline">
            Xem thêm &gt;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between animate-pulse"
            >
              <div className="flex items-start mb-3">
                <div className="w-20 h-20 bg-gray-300 rounded-lg mr-4"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}