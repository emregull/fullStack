import React from "react";

type CardGroupProps = {
  children: React.ReactNode;
};

const CardGroup: React.FC<CardGroupProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full  lg:w-[1025px] my-8">
      <div className="flex justify-between lg:grid lg:grid-cols-2 bg-white border border-gray-200 shadow-lg h-full">
        {children}
      </div>
    </div>
  );
};

export default CardGroup;
