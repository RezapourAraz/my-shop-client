import React, { FC, ReactNode } from "react";

type IBaseModalProps = {
  children: ReactNode;
  handleClose: () => void;
};

const BaseModal: FC<IBaseModalProps> = ({ children, handleClose }) => {
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
