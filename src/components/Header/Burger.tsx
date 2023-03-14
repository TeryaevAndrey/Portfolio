import { setStateMenu } from "@/store/menu";
import store from "@/store/store";
import { useStore } from "effector-react";
import React, { FC } from "react";

const Burger: FC = () => {
  const storeList = useStore(store);

  return (
    <div
      onClick={() => setStateMenu(!storeList.isOpenMenu)}
      className="h-6 flex md:hidden justify-center items-center relative ml-auto z-50"
    >
      <span className="w-9 h-0.5 bg-white before:content-[''] before:absolute before:block before:top-0 before:w-full before:h-0.5 before:bg-white after:content-[''] after:absolute after:block after:bottom-0 after:w-full after:h-0.5 after:bg-white"></span>
    </div>
  );
};

export default Burger;
