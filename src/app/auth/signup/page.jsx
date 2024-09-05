import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="flex items-center justify-center w-1/2 h-1/2">
        <div className="flex flex-col h-max-[29.313rem] w-[22.813rem] items-center ">
          <h2 className="mb-3 text-3xl font-bold text-center">Login</h2>
          <p>How do I get started lorem ipsum dolar at?</p>
          <div className="flex flex-col items-center w-full mt-7">
            <div className="flex bg-[#F0EDFF] h-14 w-full rounded-2xl">
              <span class="flex items-center leading-normal rounded rounded-r-none border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-2xl">
                <IoPersonCircleSharp />
              </span>
              <Input
                placeholder="Username"
                className=" bg-[#F0EDFF] h-14 rounded-l-none border-l-0 rounded-2xl"
              />
            </div>
            <div className="flex mt-[1.125rem] bg-[#F0EDFF] h-14 w-full rounded-2xl">
              <span class="flex items-center leading-normal rounded rounded-r-none border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-2xl">
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
      </div>

      <div className="flex items-center justify-start w-1/2 h-full bg-purple-950">
        <div className="relative bg-purple-400 right-5">
          <Image src={"/woman-pic.png"} width={785} height={524} />
        </div>
      </div>
    </>
  );
}

export default page;
