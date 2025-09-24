import React from "react"
import SearchJob from "../../components/common/search-job/SearchJob"
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb"
import JobContainer from "./JobContainer"

export default function JobDetail(){
  return (
    <div className="px-4  gap-4 max-w-screen-xl  mx-auto   bg-[#F5F5F5]">
        <SearchJob/>
        <Breadcrumb/>
        <JobContainer/>
    </div>
  )
};
