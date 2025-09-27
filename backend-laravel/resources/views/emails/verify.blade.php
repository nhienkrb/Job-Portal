<!DOCTYPE html>
<html>
  <body>
    <h2>Xin chào {{ $user->name }}</h2>
    <p>Bạn đã đăng ký thành công. Vui lòng nhấn nút dưới đây để xác nhận tài khoản:</p>

    <a href="{{ $verifyUrl }}" 
       style="display:inline-block;padding:10px 20px;background:#4CAF50;color:white;text-decoration:none;border-radius:5px;">
      Xác nhận tài khoản
    </a>

    <p>Nếu bạn không đăng ký, hãy bỏ qua email này.</p>
  </body>
</html>
