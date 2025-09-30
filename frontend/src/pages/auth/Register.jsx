export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg grid grid-cols-12 overflow-hidden">
        
        {/* Left Image */}
        <div
          className="hidden md:block col-span-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://jobsgo.vn/_2025/img/popup/login.jpg')",
          }}
        ></div>

        {/* Right Form */}
        <div className="col-span-12 md:col-span-6 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Chào Mừng Bạn Đến Với JobsGO
          </h2>
          <div className="mb-4">
            <button className="w-full bg-yellow-100 text-gray-800 py-2 px-4 rounded flex items-center justify-center gap-2">
              <span>📄</span> Bạn đã có CV?{" "}
              <span className="font-semibold">Tải file CV và tạo tài khoản ngay</span>
            </button>
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a className="p-2 rounded-full bg-blue-100">
                <img className="2-24 h-24" src="https://jobsgo.vn/img/2024/fb.svg"/>
            </a>
            <button className="p-2 rounded-full bg-red-100">🟢 G</button>
            <button className="p-2 rounded-full bg-blue-200">💼 In</button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Họ tên *"
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Số điện thoại *"
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="password"
                placeholder="Mật khẩu *"
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder="Mã xác thực *"
                className="border rounded px-3 py-2 w-full"
              />
              <div className="text-2xl font-bold">iofa</div>
            </div>

            {/* Checkbox */}
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý với{" "}
                <a href="#" className="text-blue-600 font-semibold">
                  Quy chế hoạt động và các Điều khoản, Chính sách
                </a>{" "}
                của JobsGO.vn
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý để JobsGO.vn lưu trữ và xử lý các dữ liệu...
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
            >
              Đăng Ký Mở Tài Khoản
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-4">
            Bạn đã có tài khoản?{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Đăng nhập ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
