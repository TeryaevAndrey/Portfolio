import React, { FC } from "react";
import Burger from "./Burger";
import MenuList from "../MenuList/MenuList";
import MenuMob from "./MenuMob/MenuMob";
import Socials from "../Socials/Socials";

const Header: FC = () => {
  return (
    <header className="py-8">
      <div className="container-app">
        <div className="flex md:hidden justify-between items-center">
          <Burger />
          <MenuMob />
        </div>
        <div className="hidden md:flex justify-between items-center">
            <MenuList />
            <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
