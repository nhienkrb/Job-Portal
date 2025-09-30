import React from "react";
import useCompany from "../../hooks/useCompany";
import IsError from "../../components/IsError";

export default function Employers() {
  const { companies, loading, error,refetch } = useCompany();

  // Hiển thị loading
  if (loading) {
    return (
      <div className="w-full bg-gradient-to-r from-green-50 to-green-100 py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Nhà Tuyển Dụng Tiêu Biểu
            </h2>
            <div className="text-sm text-blue-600 font-medium">
              Xem thêm &gt;
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center mb-5 animate-pulse"
              >
                <div className="flex justify-center -mt-12">
                  <div className="w-16 h-16 rounded-lg shadow-md bg-gray-200"></div>
                </div>
                <div className="mt-4 h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="mt-4">
                  <div className="bg-gray-200 text-transparent text-sm font-medium px-2 py-2 rounded-lg w-12 mx-auto">
                    0
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Hiển thị lỗi
  if (error) return <IsError error={error} onRetry={refetch} />;

  // Hiển thị khi không có dữ liệu
  if (!companies || companies.length === 0) {
    return (
      <div className="w-full bg-gradient-to-r from-green-50 to-green-100 py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Nhà Tuyển Dụng Tiêu Biểu
            </h2>
            <div className="text-sm text-blue-600 font-medium">
              Xem thêm &gt;
            </div>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-600">Chưa có dữ liệu nhà tuyển dụng</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-green-50 to-green-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Nhà Tuyển Dụng Tiêu Biểu
          </h2>
          <a
            href="/employers" // Thay đổi đường dẫn theo route của bạn
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Xem thêm &gt;
          </a>
        </div>

        {/* Employers list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-[50px]">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center mb-5 group"
              onClick={() => {
                // Điều hướng đến trang chi tiết công ty
                window.location.href = `/companies/${company.id}`;
              }}
            >
              <div className="flex justify-center -mt-12">
                <img
                  src={company.logo || ""} // Ảnh mặc định nếu không có logo
                  alt={company.name}
                  className="w-16 h-16 rounded-lg shadow-md object-contain bg-white group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    // Xử lý khi ảnh lỗi
                    e.currentTarget.src = "/default-company-logo.png";
                  }}
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-800 line-clamp-2">
                {company.name}
              </h3>
              <div className="mt-4">
                <span className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-2 rounded-lg inline-block">
                  {company.jobs_count || company.active_jobs_count || 0} việc
                  làm đang tuyển
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
