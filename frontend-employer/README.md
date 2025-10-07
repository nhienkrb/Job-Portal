# Employer Portal - Job Portal Management System

Hệ thống quản lý tuyển dụng dành cho nhà tuyển dụng, được xây dựng với React, Tailwind CSS và Flowbite.

## 🚀 Tính năng chính

### 📊 Dashboard
- Tổng quan thống kê tuyển dụng
- Biểu đồ và báo cáo trực quan
- Thông tin nhanh về việc làm và ứng viên

### 💼 Quản lý việc làm
- Tạo, chỉnh sửa, xóa tin tuyển dụng
- Quản lý trạng thái việc làm (Đang hoạt động, Tạm dừng, Đã đóng)
- Tìm kiếm và lọc việc làm
- Phân loại theo danh mục và kỹ năng

### 👥 Quản lý ứng viên
- Duyệt hồ sơ ứng viên
- Tìm kiếm theo kỹ năng và kinh nghiệm
- Xem chi tiết hồ sơ ứng viên
- Quản lý ứng tuyển

### 🏢 Quản lý công ty
- Cập nhật thông tin công ty
- Upload logo và hình ảnh
- Quản lý thông tin liên hệ

### 📈 Thống kê & Báo cáo
- Phân tích hiệu quả tuyển dụng
- Thống kê ứng viên và việc làm
- Xuất báo cáo PDF/Excel

### ⚙️ Cài đặt
- Quản lý tài khoản cá nhân
- Cài đặt thông báo
- Cài đặt quyền riêng tư

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS 4, Heroicons
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Date Handling**: date-fns

## 📦 Cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd frontend-employer
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Cấu hình môi trường**
Tạo file `.env` và cấu hình:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

4. **Chạy ứng dụng**
```bash
npm run dev
```

## 🏗️ Cấu trúc thư mục

```
src/
├── components/          # Components tái sử dụng
│   ├── Header.jsx      # Header với search và user menu
│   └── Sidebar.jsx     # Sidebar navigation
├── context/            # React Context
│   └── EmployerContext.jsx  # Context quản lý state
├── config/             # Cấu hình
│   └── axiosConfig.js  # Cấu hình Axios
├── layout/             # Layout components
│   └── Layout.jsx      # Layout chính
├── pages/              # Các trang
│   ├── Dashboard.jsx   # Trang chủ
│   ├── Jobs.jsx        # Quản lý việc làm
│   ├── JobCreate.jsx   # Tạo việc làm
│   ├── JobEdit.jsx     # Chỉnh sửa việc làm
│   ├── Candidates.jsx  # Quản lý ứng viên
│   ├── CandidateDetail.jsx # Chi tiết ứng viên
│   ├── Company.jsx     # Thông tin công ty
│   ├── CompanyEdit.jsx # Chỉnh sửa công ty
│   ├── Analytics.jsx   # Thống kê
│   ├── Settings.jsx    # Cài đặt
│   └── Login.jsx       # Đăng nhập
├── App.jsx             # Component chính
├── App.css             # Styles
└── main.jsx            # Entry point
```

## 🔗 API Endpoints

### Authentication
- `POST /auth/login` - Đăng nhập
- `POST /auth/logout` - Đăng xuất

### Jobs Management
- `GET /employer/jobs` - Lấy danh sách việc làm
- `POST /employer/jobs` - Tạo việc làm mới
- `PUT /employer/jobs/:id` - Cập nhật việc làm
- `DELETE /employer/jobs/:id` - Xóa việc làm

### Candidates Management
- `GET /employer/candidates` - Lấy danh sách ứng viên
- `GET /employer/candidates/:id` - Chi tiết ứng viên

### Company Management
- `GET /employer/company` - Thông tin công ty
- `POST /employer/company` - Tạo/cập nhật công ty

### Analytics
- `GET /employer/analytics` - Thống kê tổng quan
- `GET /employer/stats` - Thống kê chi tiết

## 🎨 UI/UX Features

- **Responsive Design**: Tối ưu cho mọi thiết bị
- **Dark Mode**: Hỗ trợ chế độ tối
- **Loading States**: Trạng thái loading mượt mà
- **Error Handling**: Xử lý lỗi thân thiện
- **Toast Notifications**: Thông báo real-time
- **Form Validation**: Validation form chi tiết

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Nếu có vấn đề hoặc câu hỏi, vui lòng tạo issue trên GitHub hoặc liên hệ team phát triển.

---

**Happy Coding! 🎉**
