import store from "@/store/store";
import { useStore } from "effector-react";
import React, { FC } from "react";

const Success: FC = () => {
  const storeList = useStore(store);

  return (
    <div
      className={`fixed top-[10px] right-[${
        storeList.isSuccess.isSuccess ? "0" : "-100%"
      }] rounded-l-[5px] bg-green-500 text-white ease-linear duration-500 flex justify-center items-center px-3 py-2 min-h-[40px]`}
    >
      {storeList.isSuccess.text}
    </div>
  );
};

export default Success;
