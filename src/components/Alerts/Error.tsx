import store from "@/store/store";
import { useStore } from "effector-react";
import React, { FC } from "react";

const Error: FC = () => {
  const storeList = useStore(store);

  return (
    <div
      className={`fixed top-[10px] ${
        storeList.isError.isError ? "right-0" : "-right-[100%]"
      } rounded-l-[5px] bg-red-500 text-white ease-linear duration-200 flex justify-center items-center px-3 py-2 min-h-[40px]`}
    >
      {storeList.isError.text}
    </div>
  );
};

export default Error;
