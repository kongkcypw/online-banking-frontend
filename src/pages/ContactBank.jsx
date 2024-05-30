import { MdSpeakerPhone,MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ContactBank = () => {

    return (
        <div className="text-left text-white">
            <div className="text-lg text-bold">
                ติดต่อธนาคารผ่าน KTP
            </div>
            <div className="text-gray-300">
                สะดวก มีเจ้าหน้าที่ให้ความช่วยเหลือ 24 ชม.
            </div>
            <div className='mt-2 border-4 rounded bg-white border-white px-4 py-2'>
                <div className="flex">
                    <div className="my-auto">
                        <MdSpeakerPhone className="text-black text-4xl" />
                    </div>
                    <div className="ml-4">
                        <div className="text-gray-400">
                            โทรผ่านอินเทอร์เน็ต
                        </div>
                        <div className="text-black">
                            ภาษาไทย
                        </div>
                    </div>
                </div>
                <hr className="my-2"></hr>
                <div className="flex">
                    <div className="my-auto">
                        <MdSpeakerPhone className="text-black text-4xl" />
                    </div>
                    <div className="ml-4">
                        <div className="text-gray-400">
                            โทรผ่านอินเทอร์เน็ต
                        </div>
                        <div className="text-black">
                            ภาษาอังกฤษ
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-lg text-bold">
                แชทกับ KTP Live
            </div>
            <div className="text-gray-300">
                Live chat ช่วยเหลือ แนะนำบริการและโปรโมชั่น
            </div>
            <div className='mt-2 border-4 rounded bg-white border-white px-4 py-2'>
                <div className="flex">
                    <div className="my-auto">
                        <img className="rounded-full h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/2048px-LINE_logo.svg.png"/>
                    </div>
                    <div className="ml-4">
                        <div className="text-gray-400">
                            Line
                        </div>
                        <div className="text-black">
                            @KTPLive
                        </div>
                    </div>
                </div>
                <hr className="my-2"></hr>
                <div className="flex">
                    <div className="rounded-full bg-orange-300 my-auto p-2 h-10 w-10">
                        <MdEmail className="text-2xl mx-auto" />
                    </div>
                    <div className="ml-4">
                        <div className="text-gray-400">
                            E-mail
                        </div>
                        <div className="text-black">
                            info@ktpbank.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-lg text-bold">
                การใช้งาน KTP
            </div>
            <div className='mt-2 border-4 rounded bg-white border-white px-4 py-2'>
                <div className="flex justify-between">
                    <div className="text-black">
                        แนะนำการใช้บริการ
                    </div>
                    <div className="my-auto">
                        <IoIosArrowForward className="text-black"/>
                    </div>
                </div>
                <hr className="my-2"></hr>
                <div className="flex justify-between">
                    <div className="text-black">
                        คำถามที่พบบ่อย
                    </div>
                    <div className="my-auto">
                        <IoIosArrowForward className="text-black"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBank