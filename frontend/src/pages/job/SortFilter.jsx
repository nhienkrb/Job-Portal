import React, { useState } from "react";
import JobCard from "../../components/JobCard";
import IsLoadingCard from "../../components/isLoadingCard";
import IsError from "../../components/IsError";
import { useJobs } from "../../hooks/useJobs";
import jobService from "../../service/JobService";
import useCategory from "../../hooks/useCategory";
const sortOptions = [
  { label: "Phù hợp", value: "created" },
  { label: "Việc mới đăng", value: "created" },
  { label: "Mới cập nhật", value: "created" },
  { label: "Lương cao", value: "salary" },
];
export default function SortFilter() {
  const { jobs, loading, error, fetchJobs, setJobs } = useJobs();
  const { category } = useCategory();
  const [sort, setSort] = useState("created");
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    console.log(newSort);
    setSort(newSort);
    jobService.getJobsByFilter({ sort: newSort }).then((res) => {
      setJobs(res.data.data || res.data?.data?.data || []);
    });
  };
  if (loading) return <IsLoadingCard />;
  if (error) return <IsError error={error} onRetry={fetchJobs} />;
  return (
    <div className="px-4 grid grid-cols-12 gap-4 max-w-screen-xl mx-auto">
      <div className="mt-5 col-span-12 sm:col-span-9">
        {/* Desktop: Radio buttons */}
        <div className="flex justify-between">
          <div className="hidden md:flex items-center gap-6">
            <p className="text-2xl md:text-sm text-gray-900 dark:text-white ">
              Hiển thị
            </p>
            {sortOptions.map((opt, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`radio-${index}`}
                  type="radio"
                  value={opt.value}
                  name="display-option"
                  checked={sort === opt.value}
                  onChange={handleSortChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`radio-${index}`}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {opt.label}
                </label>
              </div>
            ))}
          </div>
          <div className="items-center text-md gap-2 text-nowrap">
            Việc 1 - {jobs.length} / 20670
          </div>
        </div>
        {/* Mobile: Select box */}
        <div className="md:hidden w-full">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={sort}
            onChange={handleSortChange}
          >
            {sortOptions.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {/* Jobs list */}
        <div className="grid grid-cols-12 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="mt-5 col-span-12 sm:col-span-6">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-5 col-span-12  sm:col-span-3 items-start space-y-5">
        <div className="rounded-md">
          <img
            className="rounded-md w-full"
            src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/09/TD-VIETNAM-1.png"
          />
        </div>
        <div className="rounded-md  w-full">
          <img
            className="rounded-md"
            src="https://media-blog.jobsgo.vn/blog/wp-content/uploads/2025/08/CareerViet-Vuo%CC%82n-1.jpg"
          />
        </div>
        {/* Tìm theo ngành nghề */}
        <div>
          <div className="block max-w p-3 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tìm Theo Ngành Nghề
            </h6>
            <ul className="custom-scroll cursor-pointer w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto h-[300px]">
              {category.map((cate) => {
                return ( <li className="w-full px-4 py-2  rounded-t-lg dark:border-gray-600">
                  {cate.name}
                </li>)
              })}
            </ul>
          </div>
        </div>

        {/* Tìm theo địa điểm */}
        <div>
          <div className="block max-w p-3 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h6 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
             Ngành Nghề Hot
            </h6>
            <ul className="custom-scroll cursor-pointer w-full text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto h-[300px]">
                {category.map((cate) => {
                return ( <li className="w-full px-4 py-2  rounded-t-lg dark:border-gray-600">
                  {cate.name}
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
