import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb";
import CompanyCard from "../../components/CompanyCard";

export default function CompanyBanner() {
  return (
    <div>
      <div
        className="w-full bg-cover bg-center py-16"
        style={{
          backgroundImage:
            "url('https://jobsgo.vn/_2025/img/company/bg-company.webp')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Tiêu đề */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
            659 Doanh nghiệp Tiêu Biểu đang tuyển dụng T9/2025
          </h2>
          <p className="text-lg md:text-xl font-semibold text-blue-800 mb-6">
            Các công ty Tiêu Biểu hàng đầu đang tuyển dụng
          </p>

          {/* Form tìm kiếm */}
          <div className="flex max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Nhập tên công ty..."
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-r-lg hover:bg-blue-800">
              TÌM CÔNG TY
            </button>
          </div>
        </div>
      </div>

      <Breadcrumb />
      <div className="px-4 grid grid-cols-12 gap-4 max-w-screen-xl  mx-auto  mt-2">
        <div className="col-span-12">
          <h2 className="text-2xl font-bold">
            660 Doanh nghiệp Tiêu Biểu đang tuyển dụng T9/2025
          </h2>
        </div>
        <div className=" col-span-12 sm:col-span-6 md:col-span-4">
          <CompanyCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <CompanyCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <CompanyCard />
        </div>
      </div>
    </div>
  );
}
