import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <Outlet />
    </div>
  );
}