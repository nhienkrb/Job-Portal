import React from "react";
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb";
import CareerGuide from "../job/CareerGuide";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title:
      "The Manhattan và vị thế kiến tạo không gian sống nghỉ dưỡng tại gia",
    date: "24/09/2025",
    author: "Trần Hiền",
    excerpt:
      "Nhu cầu về không gian sống của giới thượng lưu hiện nay không chỉ dừng lại ở một nơi an cư...",
    image:
      "https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/The-Manhattan.jpg",
    featured: true,
  },
  {
    id: 2,
    title:
      "Bcons City: Kết nối giao thông huyết mạch, sống hiện đại, tiện nghi",
    date: "24/09/2025",
    excerpt:
      "Trong bối cảnh đô thị hóa ngày càng phát triển, việc sở hữu căn hộ tại các vị trí hạ tầng giao thông...",
    image:
      "https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/Bcons-City.jpg",
  },
  {
    id: 3,
    title: "6 chiếc mũ tư duy và cách ứng dụng trong cuộc sống",
    date: "24/09/2025",
    excerpt:
      "6 chiếc mũ tư duy là một phương pháp tư duy mạnh mẽ và linh hoạt...",
    image:
      "https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/6-chiec-mu-tu-duy-image-1.jpg",
  },
  {
    id: 4,
    title: "Key Visual là gì? Cách tạo Key Visual với 3 giai đoạn cụ thể",
    date: "24/09/2025",
    excerpt:
      "Key Visual (KV) là thuật ngữ quen thuộc trong lĩnh vực marketing, truyền thông...",
    image:
      "https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/to-roi-bhxh-la-gi-image-1.jpg",
  },
  {
    id: 5,
    title: "Tờ rời BHXH là gì? Cách lấy tờ rời BHXH mới nhất 2025",
    date: "24/09/2025",
    excerpt:
      "Tờ rời BHXH là một giấy xác nhận quá trình đóng BHXH của người lao động...",
    image:
      "https://cdn.pixabay.com/photo/2017/01/31/16/42/document-2029385_1280.png",
  },
];

export default function Blog() {
  const featured = posts[0];
  const sidePosts = posts.slice(1);
  return (
    <div className="bg-[#F5F5F5] p-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Banner Blog */}
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 gap-2">
            <div>
              <img className="rounded-2xl" src="/public/img/banner_blog.png" />
            </div>
          </div>
        </div>
        <Breadcrumb />
        {/* Bài Viết Nổi Bật */}
        <div className="grid grid-cols-12 gap-6 p-2">
          {/* Bộ lọc phía trên */}
          <div className="col-span-12 text-2xl font-bold">
            <p>Bài Viết Nổi Bật</p>
          </div>

          {/* Left: Featured post */}
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-lg overflow-hidden shadow bg-white">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 object-cover"
              />
              <div
                className="p-4  text-white"
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
                <h2 className="font-bold text-xl mb-2">{featured.title}</h2>
                <div className="flex items-center text-sm gap-4 mb-2 opacity-90">
                  <span>📅 {featured.date}</span>
                  <span>✍ {featured.author}</span>
                </div>
                <p className="text-sm mb-2">{featured.excerpt}</p>
                <a href="#" className="text-sm underline">
                  Xem thêm »
                </a>
              </div>
            </div>
          </div>

          {/* Right: Other posts */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            {sidePosts.map((p) => (
              <Link to={`/blog/${p.id}`}
                key={p.id}
                className="flex gap-3 rounded-lg p-2 bg-white shadow-sm
                hover:shadow-md transition" >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-24 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {p.title}
                  </h3>
                  <div className="text-xs text-gray-500 mt-1">📅 {p.date}</div>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Career Guide */}
        <CareerGuide />
      </div>
    </div>
  );
}
