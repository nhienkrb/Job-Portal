import React from "react";
import CareerTools from "./CareerTools";
import Employers from "./Employers";
import JobList from "./JobList";
import JobMarket from "./JobMarket";
import JobSearchBanner from "./JobSearchBanner";
export default function Home() {
  return (
    <div>
      <JobSearchBanner />
      <JobList />
      <JobMarket />
      <Employers />
      <CareerTools />
    </div>
  );
}
