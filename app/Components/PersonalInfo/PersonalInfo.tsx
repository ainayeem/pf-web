import Image from "next/image";
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="">
      <div className="bg-[#eef2ff] py-20 px-5 xl:p-20 xl:pb-10 border-b">
        <div>
          <h1 className="text-4xl font-semibold text-center">Personal Informations</h1>
          <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>
        </div>
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-5 gap-10 text-lg">
          <div
            className="relative border-2 border-primaryColor
           hover:border-primaryColor hover:bg-primaryColor hover:text-white duration-300 rounded-md p-10 font-medium"
          >
            ain.nayeem1999@gmail.com
            <Image
              src="/assets/icons/mail.png"
              alt="icon img"
              className="absolute right-1 bottom-0 h-auto w-10 p-info-filter"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
          <div
            className="relative border-2 border-primaryColor
           hover:border-primaryColor hover:bg-primaryColor hover:text-white duration-300 rounded-md p-10 font-medium"
          >
            <span className="text-slate-400">+88</span> 01877565651
            <Image
              src="/assets/icons/phone.png"
              alt="icon img"
              className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
          <div
            className="relative border-2 border-primaryColor
           hover:border-primaryColor hover:bg-primaryColor hover:text-white duration-300 rounded-md p-10 font-medium"
          >
            Mohammadpur, Dhaka
            <Image
              src="/assets/icons/address.png"
              alt="icon img"
              className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
          <div
            className="relative border-2 border-primaryColor
           hover:border-primaryColor hover:bg-primaryColor hover:text-white duration-300 rounded-md p-10 font-medium"
          >
            <a href="https://www.linkedin.com/in/ainayeem/">linkedin.com/in/ainayeem</a>
            <Image
              src="/assets/icons/linkedin.png"
              alt="icon img"
              className="absolute right-1 bottom-1 h-auto w-10 p-info-filter"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
          <div
            className="relative border-2 border-primaryColor
           hover:border-primaryColor hover:bg-primaryColor hover:text-white duration-300 rounded-md p-10 font-medium"
          >
            <a href="https://github.com/ainayeem">github.com/ainayeem</a>
            <Image
              src="/assets/icons/github.png"
              alt="icon img"
              className="absolute right-0 bottom-0 h-auto w-12 p-info-filter"
              width={0}
              height={0}
              sizes="100w"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
