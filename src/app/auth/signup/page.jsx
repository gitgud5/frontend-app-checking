import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="flex flex-col h-max-[29.313rem] w-[22.813rem] items-center border-2">
        <h2 className="mb-3 text-3xl font-bold text-center">Login</h2>
        <p>How do I get started lorem ipsum dolar at?</p>
        <div className="flex flex-col items-center w-full mt-7">
          <Input placeholder="Username" className="bg-[#F0EDFF] h-14" />
          <Input
            placeholder="Password"
            className="mt-[1.125rem] bg-[#F0EDFF] h-14"
          />
          <Button className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] w-[7.75rem] h-[3.25rem] mt-6">
            Login
          </Button>
          <p className="mt-6">Login with others</p>
          <div className="flex flex-col w-full mt-6 space-y-4">
            <Button className="w-full h-14 bg-[#F0EDFF] text-black hover:text-white">
              {" "}
              <FaGoogle /> Login with Google
            </Button>
            <Button className="w-full h-14 bg-[#F0EDFF] text-black hover:text-white">
              {" "}
              <FaFacebookSquare /> Login with FAcebook
            </Button>
          </div>
        </div>
      </div>

      <div className="card ">
        <Image src={"/woman-pic.png"} width={785} height={524} />
      </div>
    </>
  );
}

export default page;
