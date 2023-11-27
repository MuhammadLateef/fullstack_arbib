"use client";
import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avator } from "../Avator";
import { MenuItem } from "./MenuItem";
import useRegisterModel from "@/app/hooks/useRegisterModels";
import useLoginModel from "@/app/hooks/useLoginModels";
export const UserMenu = () => {
  const registerModel = useRegisterModel();
  const LoginModel = useLoginModel();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm hover:bg-neutral-100 font-semibold py-3 px-4 rounded-full transition cursor-pointer"
          onClick={() => {}}
        >
          Airbnd your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 border-neutral-200 rounded-full md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avator />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={LoginModel.onOpen} label="Login" />
              <MenuItem onClick={registerModel.onOpen} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
