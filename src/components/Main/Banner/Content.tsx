import React, { FC } from "react";
import { Link } from "react-scroll";

const Content: FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      <h1 className="text-[40px] font-bold leading-[46px] uppercase">
        Teryaev Andrey
      </h1>
      <h2 className="text-[45px] font-medium leading-[52px]">Frontend-dev</h2>
      <p className="text-xl mt-3">
        Добро пожаловать на мой сайт-портфолио! Здесь вы найдете мои проекты,
        созданные с использованием различных инструментов.
      </p>

      <Link
        className="bg-banner-btn-gradient py-5 px-9 min-h-[60px] rounded-main flex justify-center items-center mt-7"
        to="contacts"
      >
        Связаться со мной
      </Link>
    </div>
  );
};

export default Content;
