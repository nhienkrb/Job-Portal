import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">CÔNG TY CỔ PHẦN JOBSGO</h3>
            <p>Văn phòng Miền Bắc: Tầng 3 tòa G1</p>
            <p>Five Star Garden, Số 2 Kim Giang</p>
            <p>Phường Khương Đình, Hà Nội</p>
            <p>Điện thoại: 0989.579.188</p>
            <p>Văn phòng Miền Nam: Tầng 5, Toà nhà</p>
            <p>PLS, 607-609 Nguyễn Kiệm, Phường</p>
            <p>Đức Nhân, TP.Hồ Chí Minh</p>
            <p>Điện thoại: 0902.699.348</p>
            <p>Email: contact@jobsgo.vn</p>
            <p>Hỗ trợ trực tuyến: 070.505.2927</p>
            <p>Hotline: 0989.565.868</p>
          </div>

          {/* Job Type 1 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Việc làm theo địa điểm</h3>
            <p>TP.HCM</p>
            <p>Hà Nội</p>
            <p>Đà Nẵng</p>
            <p>Cần Thơ</p>
            <p>Bình Dương</p>
            <p>Hải Phòng</p>
            <p>Đồng Nai</p>
            <p>Quảng Ninh</p>
            <p>Bắc Ninh</p>
          </div>

          {/* Job Type 2 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Việc làm theo ngành nghề</h3>
            <p>Tài chính/Ngân hàng</p>
            <p>Kế toán/Kiểm toán</p>
            <p>Hành chính/Văn phòng</p>
            <p>Kinh doanh/Bán hàng</p>
            <p>Marketing/Quảng cáo</p>
            <p>Xây dựng/Kiến trúc</p>
            <p>Công nghệ Thông tin</p>
            <p>Hành chính/Văn phòng</p>
          </div>

          {/* Job Type 3 */}
          <div>
            <h3 className="text-lg font-bold mb-2">Việc làm theo loại hình</h3>
            <p>Part-time</p>
            <p>Online</p>
            <p>Thời vụ</p>
            <p>Remote</p>
            <p>Trọn đời</p>
            <p>Nhân viên Văn phòng</p>
            <p>Trưởng Phòng</p>
            <p>Giám đốc</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;