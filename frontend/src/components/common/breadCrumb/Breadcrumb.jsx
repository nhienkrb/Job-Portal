import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((part) => part !== "");

  // Tạo đường dẫn tích lũy
  const createPath = (index) => "/" + pathParts.slice(0, index + 1).join("/");

  // Ánh xạ tên hiển thị
  const pathNameMap = {
    products: "Sản phẩm",
    categories: "Danh mục",
    users: "Người dùng",
    settings: "Cài đặt",
    // Thêm các ánh xạ khác tại đây
  };

  return (
    <nav className="flex px-4 max-w-screen-xl mx-auto pt-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home Item */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {/* Dynamic Breadcrumb Items */}
        {pathParts.map((part, index) => {
          const to = createPath(index);
          const isLast = index === pathParts.length - 1;
          const displayName = pathNameMap[part] || part.charAt(0).toUpperCase() + part.slice(1);

          return (
            <li key={to} className="flex items-center">
              {/* Separator */}
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>

              {/* Breadcrumb Item */}
              {isLast ? (
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={to}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}