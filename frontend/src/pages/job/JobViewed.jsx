import React from "react";
import JobCard from "../../components/JobCard";

export default function JobViewed() {
  return (
    <div className="px-4 grid grid-cols-12 gap-4 max-w-screen-xl   mx-auto ">
      <div className=" col-span-12">
        <h2 className="text-xl font-bold text-gray-800">Công Việc Đã Xem</h2>
      </div>
      <div className="mt-2 col-span-12 sm:col-span-4">
        <JobCard />
      </div>
      <div className="mt-2 col-span-12 sm:col-span-4">
        <JobCard />
      </div>
      <div className="mt-2 col-span-12 sm:col-span-4">
        <JobCard />
      </div>
    </div>
  );
}
