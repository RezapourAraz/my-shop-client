import React, { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

// types
type ILoginSectionProps = {
  setOpenAccount: Dispatch<SetStateAction<boolean>>;
  openAccount: boolean;
};

const LoginSection: FC<ILoginSectionProps> = ({
  setOpenAccount,
  openAccount,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 opacity-75 z-10 ${
          openAccount ? "" : "hidden"
        }`}
        onClick={() => setOpenAccount(false)}
      />
      <div
        className={`fixed top-0 right-0 bg-white h-full w-3/12 z-10 ${
          openAccount ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="bg-gray-200 p-6">
          <h5 className="font-bold">LOGIN</h5>
        </div>
        <div className="p-6">
          <input
            className="border-2 p-3 w-full"
            placeholder="Email or Username*"
          />
        </div>
        <div className="p-6">
          <input className="border-2 p-3 w-full" placeholder="Password*" />
        </div>
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" />
            <p className="ml-2">Remember me</p>
          </div>
          <div>
            <Link href="#">Lost Password</Link>
          </div>
        </div>
        <div className="p-6">
          <button className="bg-black text-white p-3 w-full">LOGIN</button>
        </div>
        <div className="px-6 flex items-center justify-center">
          <div className="flex items-center text-center">
            <p className="ml-2 text-sm">
              No Account yet? <Link href="#">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
