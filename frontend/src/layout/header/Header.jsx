import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link 
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JobPortal
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              style={{ marginRight: "10px" }}
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-9 h-9 rounded"
                src="https://media.jobsgo.vn/uploads/thumb/img/male_thumb_300.jpg?v=1758217894"
                alt="user photo"
              />
            </button>
            <div
              style={{ paddingRight: "20px", marginRight:"20px"}}
              className="flex  flex-col border-r-2  border-r-gray-400"
            >
              <span className="block text-sm text-gray-900 dark:text-white font-bold">
                Ngô Nhiên
              </span>
              <span className="block text-sm text-[#34b207] dark:text-white">
                Đang tìm việc
              </span>
            </div>

            <button
              type="button"
              className="cursor-pointer text-white bg-btn-employer hover:bg-btn-hover-employer hover:text-text-btn-hover-employer focus:ring-4 focus:outline-none focus:ring-btn-focus-employer font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              NHÀ TUYỂN DỤNG
            </button>
            <div
              className="spacing-0 w-[300px] z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-2">
                <label className="flex items-center cursor-pointer  justify-between ">
                  <span className="text-[#34b207] font-bold text-sm">
                    {" "}
                    Đang Tìm việc
                  </span>
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-[#6c757d] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#34b207] dark:peer-checked:bg-[#34b207]"></div>
                </label>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="">
                      <a href="/#" className="block">
                        <img
                          style={{ width: "100%" }}
                          src="https://jobsgo.vn/_2025/img/menu-1.webp"
                          className="rounded "
                          alt="Analyze CV Mascot"
                        />
                      </a>
                    </div>
                    <div className="">
                      <a href="/#" className="block">
                        <img
                          style={{ width: "100%" }}
                          src="https://jobsgo.vn/_2025/img/menu-2.webp"
                          className="rounded"
                          alt="Create CV Mascot"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-5">
                  <Link
                    to={"/candidate/cv"}
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="https://jobsgo.vn/_2025/img/menu/profile.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Quản lý hồ sơ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/candidate/jobs-applied"}
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="	https://jobsgo.vn/_2025/img/menu/job-saved.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Việc làm đã ứng tuyển
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/candidate/jobs-saved"}
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="	https://jobsgo.vn/_2025/img/menu/heart.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Việc làm đã lưu
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/candidate/jobs-viewed"}
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="	https://jobsgo.vn/_2025/img/menu/job-view.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Việc đã xem
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/candidate/recruiter-view"}
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="https://jobsgo.vn/_2025/img/menu/eye.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Nhà tuyển dụng đã xem hồ sơ
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="	https://jobsgo.vn/_2025/img/menu/lock.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Đổi mật khẩu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-red-600 flex items-center whitespace-nowrap font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <img
                      src="	https://jobsgo.vn/_2025/img/menu/logout.svg"
                      className="w-5 h-5 mr-2"
                      alt="Profile Icon"
                    />
                    Đăng Xuất
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/jobs"}
                  id="dropdownNavbarLink-job"
                  data-dropdown-toggle="dropdownNavbar-job"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Việc Làm
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </Link>
                <div
                  id="dropdownNavbar-job"
                  className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link
                to={"/company"}
                  id="dropdownNavbarLink-company"
                  data-dropdown-toggle="dropdownNavbar-company"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Công Ty
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </Link>
                <div
                  id="dropdownNavbar-company"
                  className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  aria-current="page"
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Hồ Sơ/CV
                </a>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cẩm Nang Nghề Nghiệp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
