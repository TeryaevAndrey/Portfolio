import React, { FC } from "react";
import { Link } from "react-scroll";

const Content: FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center max-w-[500px] w-full">
      <h1 className="text-[40px] lg:text-[60px] font-bold leading-[46px] lg:leading-[70px] uppercase">
        Teryaev Andrey
      </h1>
      <h2 className="text-[45px] font-medium leading-[52px]">Frontend-dev</h2>
      <p className="text-xl mt-3 md:text-left w-full more-md:mt-7">
        Добро пожаловать на мой сайт-портфолио! Здесь вы найдете мои проекты,
        созданные с использованием различных инструментов.
      </p>

      <Link
        className="bg-banner-btn-gradient py-5 px-9 min-h-[60px] rounded-main flex justify-center items-center mt-7 ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1]"
        to="contacts"
        spy={true}
        smooth={true}
        offset={50}
        duration={250}
      >
        Связаться со мной
      </Link>
    </div>
  );
};

export default Content;
