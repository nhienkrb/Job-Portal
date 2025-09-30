import React from "react";
const CategorySkeleton = () => {
  const items = Array.from({ length: 12 });
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {" "}
      {items.map((_, index) => (
        <div
          key={index}
          className="rounded-xl bg-gray-100 p-6 shadow-sm animate-pulse"
        >
          {" "}
          {/* Icon placeholder */}{" "}
          <div className="w-12 h-12 mx-auto rounded-full bg-gray-300 mb-4"></div>{" "}
          {/* Title placeholder */}{" "}
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>{" "}
          {/* Subtitle placeholder */}{" "}
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};
export default CategorySkeleton;
