import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
