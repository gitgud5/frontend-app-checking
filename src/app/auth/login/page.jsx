import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import Image from "next/image";
import React from "react";

function page() {
  const rightSide = (
    <div className="card relative h-[500px] w-full max-w-[500px] ml-24 rounded-3xl border border-white/30 bg-slate-50/20">
      <div className="pt-4 space-y-4 ps-4">
        <h1 className="w-full relative z-10 max-w-[60%] text-[32px] sm:text-[38px] font-bold leading-normal">
          Very good works are waiting for you.
        </h1>
      </div>
      <div className="absolute -right-8 bottom-0 w-[70%] max-w-[250px] xs:max-w-[320px] aspect-[321/524]">
        <Image
          src="/woman-pic.png"
          alt="Woman"
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 250px, 320px"
        />
      </div>

      <div className="circle w-[100px] h-[100px] absolute z-0 -left-[50px] bottom-[40px] bg-pink-400 rounded-full"></div>
    </div>
  );

  const leftSide = (
    <div className="flex flex-col h-max-[29.313rem] w-[22.813rem] items-center ">
      <h2 className="mb-3 text-3xl font-bold text-center">Login</h2>
      <p>How do I get started lorem ipsum dolar at?</p>
      <div className="flex flex-col items-center w-full mt-7">
        <div className="flex bg-[#F0EDFF] h-14 w-full rounded-2xl">
          <span className="flex items-center px-3 text-2xl leading-normal whitespace-no-wrap border-r-0 rounded rounded-r-none border-grey-light text-grey-dark">
            <IoPersonCircleSharp />
          </span>
          <Input
            placeholder="Username"
            className=" bg-[#F0EDFF] h-14 rounded-l-none border-l-0 rounded-2xl"
          />
        </div>
        <div className="flex mt-[1.125rem] bg-[#F0EDFF] h-14 w-full rounded-2xl">
          <span className="flex items-center px-3 text-2xl leading-normal whitespace-no-wrap border-r-0 rounded rounded-r-none border-grey-light text-grey-dark">
            <CiLock />
          </span>
          <Input
            placeholder="Password"
            className=" bg-[#F0EDFF] h-14  rounded-2xl"
          />
        </div>
        <Button className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] w-[7.75rem] h-[3.25rem] mt-6">
          Login
        </Button>
        <p className="mt-6">---------Login with others---------</p>
        <div className="flex flex-col w-full mt-6 space-y-4">
          <Button className="w-full h-14 bg-[#F0EDFF] text-black hover:text-white  text-lg">
            <FaGoogle /> Login with Google
          </Button>
          <Button className="w-full h-14 bg-[#F0EDFF] text-black hover:text-white text-lg">
            <FaFacebookSquare /> Login with Facebook
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-center w-1/2 h-1/2">
        {leftSide}
      </div>

      {/* This is the component for the right side */}
      <div className="flex items-center justify-start w-1/2 h-full bg-purple-950">
        {rightSide}
      </div>
    </>
  );
}

export default page;
