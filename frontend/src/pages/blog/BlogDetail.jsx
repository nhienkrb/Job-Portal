export default function BlogDetail() {
  return (
    <div className="bg-[#F5F5F5] p-4">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Nội dung chính - col-8 */}
          <div className="col-span-12 md:col-span-8 bg-gray-50 rounded-lg p-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">
              The Manhattan và vị thế kiến tạo không gian sống nghỉ dưỡng tại
              gia
            </h2>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
              <span>
                Tác giả:{" "}
                <span className="font-semibold text-blue-600">Trần Hiền</span>
              </span>
              <span>
                Danh mục: <span className="font-semibold">Sự Kiện Nổi Bật</span>
              </span>
              <span>
                Ngày đăng: <span className="font-semibold">24/09/2025</span>
              </span>
            </div>

            {/* Rating */}
            <div className="flex text-yellow-500 text-lg mb-4">★★★★☆</div>

            {/* Nội dung */}
            <p className="italic mb-4">
              Nhu cầu về không gian sống của giới thượng lưu hiện nay không chỉ
              dừng lại ở một nơi an cư, mà là tìm kiếm một tổ ấm có thể đáp ứng
              những giá trị sống đích thực.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Chính vì nhu cầu ngày càng gia tăng đó, các dự án cao cấp với hệ
              thống tiện ích độc bản, mang tính trải nghiệm đang trở thành xu
              hướng được ưa chuộng. Những tiện ích như bến du thuyền hay công
              viên nghệ thuật không chỉ là điểm nhấn kiến trúc, mà còn là biểu
              tượng cho phong cách tinh tế, giàu trải nghiệm, nơi cư dân có thể
              tận hưởng cuộc sống đẳng cấp ngay tại nơi ở của mình.
            </p>

            <img
              src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/Bcons-City.jpg"
              alt="Ảnh minh họa"
              className="rounded-lg shadow-md mb-6"
            />
          </div>

          {/* Sidebar - col-4 */}
          <div className="col-span-12 md:col-span-4 ">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Công Cụ Hỗ Trợ Tìm Việc
              </h3>
              <ul className="space-y-2 text-blue-600 text-sm">
                <li>• Tra cứu lương</li>
                <li>• Hướng nghiệp cho sinh viên</li>
                <li>• Mẫu CV</li>
                <li>• Trắc nghiệm tính cách</li>
                <li>• Tính lương Gross/Net</li>
              </ul>
            </div>

            {/* Việc làm đề xuất */}
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm mt-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">
                  Việc Làm Đề Xuất Cho Bạn
                </h3>
                <a href="#" className="text-blue-500 text-sm">
                  Xem thêm
                </a>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Nhân Viên Tư Vấn Bds Cao Cấp",
                    company: "Công Ty Cổ Phần SSQC",
                    location: "Hồ Chí Minh",
                    salary: "10 - 100 triệu VND",
                    logo: "https://media.jobsgo.vn/media/img/employer/345156-200x200.jpg?v=1756955777",
                  },
                  {
                    title: "Nhân Viên Kinh Doanh/ Sales",
                    company: "Công Ty Phát Đạt",
                    location: "Hồ Chí Minh",
                    salary: "35 - 100 triệu VND",
                    logo: "https://media.jobsgo.vn/media/img/employer/345156-200x200.jpg?v=1756955777",
                  },
                  {
                    title: "Nhân Viên Tư Vấn - Lương Cứng",
                    company: "Công Ty TNHH BĐS Thiên Ý",
                    location: "Hồ Chí Minh",
                    salary: "Từ 8 triệu VND",
                    logo: "https://media.jobsgo.vn/media/img/employer/345156-200x200.jpg?v=1756955777",
                  },
                ].map((job, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-15 h-15">
                      <img
                        src={job.logo}
                        alt="logo"
                        className="w-full rounded border border-gray-400 "
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-red-600 font-medium text-sm">
                        {job.title}
                      </h4>
                      <p className="text-gray-600 text-xs">{job.company}</p>
                      <div className="flex gap-2 mt-1 text-xs">
                        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                          {job.location}
                        </span>
                        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
