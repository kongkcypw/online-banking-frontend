import React, { useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { RxChevronRight } from "react-icons/rx";

const Profile = () => {
  return (
    <div>
      <p className="text-white text-xl font-bold mt-8">ข้อมูลส่วนตัว</p>
      <PiUserCircleThin className="text-white text-8xl ml-28 mt-5" />
      <div className="text-white text-base font-normal">ดนัย</div>
      <div className="text-white text-base font-normal">
        เบอร์มือถือ: 081-608-6868
      </div>
      <div className="absolute rounded-md bg-white w-full h-4/6 inset-x-0 bottom-0 left-0">
        <div className="border-b-2 border-orange-200 pb-4 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            รูปและชื่อผู้ใช้
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-orange-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            อีเมล
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-orange-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            ดูเลขบัญชี
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-orange-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            บัตรเครดิตของฉัน
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
