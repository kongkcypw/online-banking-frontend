import React, { useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { RxChevronRight } from "react-icons/rx";
import useAuth from "../hooks/useAuth";
import AlertModal from "../Components/Global/AlertModal";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();

  const { userAccountInfo, logout } = useAuth();
  const [isDisplayAlertLogout, setIsDisplayAlertLogout] = useState(false);

  const NavigateAfterLogout = () => {
    logout()
    navigate("/welcome");
  }

  return (
    <div>

      <AlertModal 
        isDisplay={isDisplayAlertLogout}
        handleCancle={() => setIsDisplayAlertLogout(false)}
        headerMessage={"ออกจากระบบ ?"}
        bodyMassage={"คุณแน่ใจที่จะออกจากระบบหรือไม่"}
        handleOk={() => NavigateAfterLogout()}/>

      <p className="text-white text-xl font-bold -mt-8">ข้อมูลส่วนตัว</p>
      <PiUserCircleThin className="text-white text-8xl ml-28 mt-5" />
      <div className="text-white text-base font-normal">{userAccountInfo.FirstName} {userAccountInfo.LastName}</div>
      <div className="text-white text-base font-normal">
        เบอร์มือถือ: {userAccountInfo.PhoneNumber.slice(0, 3)}-{userAccountInfo.PhoneNumber.slice(3, 6)}-{userAccountInfo.PhoneNumber.slice(6, 10)}
      </div>
      <div className="absolute rounded-md bg-white w-full h-4/6 inset-x-0 bottom-0 left-0">
        <div className="border-b-2 border-slate-200 pb-4 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            รูปและชื่อผู้ใช้
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-slate-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            อีเมล
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-slate-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            ดูเลขบัญชี
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-slate-200 flex justify-between items-center mt-4">
          <div className="text-base text-left font-medium ml-8">
            บัตรเครดิตของฉัน
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
        <div className="border-b-2 pb-4 border-slate-200 flex justify-between items-center mt-4" onClick={() => setIsDisplayAlertLogout(true)}>
          <div className="text-base text-left font-medium ml-8">
            ออกจากระบบ
          </div>
          <RxChevronRight className="text-2xl mr-8" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
