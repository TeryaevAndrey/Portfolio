import React, { FC } from "react";
import Socials from "../Socials/Socials";
import MenuList from "./MenuList/MenuList";
import { useStore } from "effector-react";
import store from "@/store/store";

const MenuMob: FC = () => {
  const storeList = useStore(store);

  return (
    <div
      className={`fixed ${
        storeList.isOpenMenu ? "top-0 opacity-100" : "-top-[100%] opacity-0"
      } ease-in duration-150 left-0 right-0 w-full h-screen bg-[#305C81] z-40`}
    >
      <div className="mt-24">
        <MenuList />
        <div className="mt-10 flex justify-center">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default MenuMob;
