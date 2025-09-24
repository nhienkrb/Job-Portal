import React from "react";

const employers = [
  {
    id: 1,
    name: "CALIFORNIA FITNESS & YOGA",
    logo: "https://media.jobsgo.vn/media/img/employer/119627-200x200.jpg",
    jobs: "12 việc làm đang tuyển",
  },
  {
    id: 2,
    name: "Công Ty TNHH Jinyu (Việt Nam) Tire",
    logo: "https://media.jobsgo.vn/media/img/employer/119627-200x200.jpg",
    jobs: "14 việc làm đang tuyển",
  },
  {
    id: 3,
    name: "Công Ty Cổ Phần Đầu Tư Nam Group",
    logo: "https://media.jobsgo.vn/media/img/employer/119627-200x200.jpg",
    jobs: "2 việc làm đang tuyển",
  },
  {
    id: 4,
    name: "Công Ty TNHH Vision International",
    logo: "https://media.jobsgo.vn/media/img/employer/119627-200x200.jpg",
    jobs: "1 việc làm đang tuyển",
  },
  {
    id: 5,
    name: "Công Ty Cổ Phần Vinhomes",
    logo: "https://media.jobsgo.vn/media/img/employer/119627-200x200.jpg",
    jobs: "30 việc làm đang tuyển",
  },
];

export default function Employers() {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 to-green-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Nhà Tuyển Dụng Tiêu Biểu
          </h2>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Xem thêm &gt;
          </a>
        </div>

        {/* Employers list */}
        <div className="w-full bg-gradient-to-r from-green-50 to-green-100 py-10 px-5">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {employers.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center mb-5"
                >
                  <div className="flex justify-center -mt-12">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg shadow-md object-contain bg-white"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <div className="mt-4">
                    <span className="bg-blue-50 text-blue-600 text-sm font-medium px-2 py-2 rounded-lg">
                      {item.jobs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
