import React from "react";
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb";
import ProfileUser_Container from "./ProfileUser_Container";

export default function ProfileUser() {
  return (
    <div className="bg-[#F5F5F5]">
      <Breadcrumb />
      <ProfileUser_Container />
    </div>
  );
}
