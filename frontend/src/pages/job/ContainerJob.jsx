import React from "react"
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb"
import SortFilter from "./SortFilter"
import JobTraining from "./JobTraining"
import JobViewed from "./JobViewed"
import CareerGuide from "./CareerGuide"

export default function ContainerJob(){
  return (
    <div >
         <Breadcrumb/>
        <SortFilter/>
        <JobTraining/>
        {/* <JobViewed/> */}
        <CareerGuide/>
    </div>
  )
};
