import React from "react";
import InforUser_Component from "./InforUser_Component";
import Breadcrumb from "../../components/common/breadCrumb/Breadcrumb";
import ProfileSidebar from "./ProfileSidebar";

export default function ProfileUser_Container() {
  return (
    <div className="px-4  w-full gap-4 max-w-screen-xl  mx-auto  mt-2">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 text-2xl font-bold mt-2">
          <p >Quản lý hồ sơ</p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <InforUser_Component />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
}
