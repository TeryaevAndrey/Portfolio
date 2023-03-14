import React, { FC } from "react";
import MenuList from "../MenuList/MenuList";
import Socials from "../Socials/Socials";

const Footer: FC = () => {
  return (
    <div className="py-6 lg:py-12 bg-footer-gradient" id="footer">
      <div className="container-app">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <MenuList />
          <div className="mt-7 md:mt-0">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
