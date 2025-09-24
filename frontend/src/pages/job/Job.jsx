import React from "react"
import SearchJob from "../../components/common/search-job/SearchJob"
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb"
import SortFilter from "./SortFilter"
import ContainerJob from "./ContainerJob"

export default function Job(){
  return (
    <div className="bg-[#F5F5F5]">
        <SearchJob/>
        <ContainerJob/>
       
    </div>
  )
};
