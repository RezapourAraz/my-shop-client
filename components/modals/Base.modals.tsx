import React, { FC, ReactNode, useEffect } from "react";

export interface BaseModalProps {
  open: boolean;
  children: ReactNode;
  handleClose: () => void;
}

const BaseModal: FC<BaseModalProps> = ({ handleClose, children, open }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (open) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;
  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-800 opacity-75 z-10"
        onClick={handleClose}
      />
      {/* <div className="fixed inset-0 flex items-center justify-center z-20"> */}
      <div className="bg-white fixed inset-0 z-20 w-fit h-fit m-auto">
        {children}
      </div>
      {/* </div> */}
    </div>
  );
};

export default BaseModal;
