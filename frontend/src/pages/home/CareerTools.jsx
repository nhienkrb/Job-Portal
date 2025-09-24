import React from "react";

const tools = [
  {
    id: 1,
    title: "Tra Cứu Lương",
    link: "#",
    // icon: <FaMoneyBillWave className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "La Bàn Hướng Nghiệp",
    link: "#",
    // icon: <FaCompass className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 3,
    title: "Đổi Lương Gross - Net",
    link: "#",
    // icon: <MdToll className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 4,
    title: "Tính Bảo Hiểm Xã Hội 1 Lần",
    link: "#",
    // icon: <FaCalculator className="w-8 h-8 text-blue-500" />,
  },
];

export default function CareerTools() {
  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{
        background: `
      linear-gradient(
        90deg,
        rgba(14, 111, 193, 0.05) 0%,
        rgba(12, 128, 201, 0.05) 20%,
        rgba(0, 86, 185, 0.05) 40%,
        rgba(0, 62, 173, 0.05) 60%,
        rgba(0, 58, 168, 0.05) 80%,
        rgba(0, 79, 184, 0.05) 100%
      ),
      url('https://jobsgo.vn/_2025/img/bg5.webp') no-repeat center center
    `,
    backgroundSize:"cover",
    minHeight:"570px",
    backgroundPosition:"center 0"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        {/* Title */}
        <h2 className="text-3xl font-bold">Công Cụ Phát Triển Sự Nghiệp</h2>
        <p className="mt-2 text-blue-100">
          Hỗ trợ định hướng, cải thiện kỹ năng & kết nối cơ hội nghề nghiệp
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white flex items-center justify-between px-6 py-5 rounded-xl shadow hover:shadow-lg transition text-left "
            >
              <div className="flex items-center gap-4">
                {/* <div className="p-3 bg-blue-50 rounded-full">{tool.icon}</div> */}
                <h3 className="text-lg font-medium text-gray-800">
                  {tool.title}
                </h3>
              </div>
              <a
                href={tool.link}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Khám phá ngay &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
