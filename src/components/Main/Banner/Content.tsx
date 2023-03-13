import React, { FC } from "react";
import { Link } from "react-scroll";

const Content: FC = () => {
  const [speciality, setSpeciality] = React.useState<string>("Frontend-dev");
  const [restart, setRestart] = React.useState<boolean>(false);
  const [countVal, setCountVal] = React.useState<number>(0);

  React.useEffect(() => {
    const animateDelete = setInterval(() => {
      if (!restart) {
        setSpeciality((prev) => prev.slice(0, speciality.length - 1));
      }
    }, 150);

    if (speciality.length === 0) {
      setRestart(true);
      setCountVal(0);
    }

    return () => clearInterval(animateDelete);
  }, [speciality, restart]);

  React.useEffect(() => {
    const word = "Frontend-dev";

    if (speciality === word) {
      setRestart(false);
    }

    const animateAdd = setInterval(() => {
      if (restart && speciality !== word) {
        setCountVal((prev) => prev + 1);
        setSpeciality((prev) => prev + word[countVal]);
      }
    }, 150);

    return () => clearInterval(animateAdd);
  }, [restart, speciality]);

  return (
    <div className="flex flex-col items-center md:items-start text-center max-w-[550px] w-full">
      <h1 className="text-[40px] lg:text-[60px] font-bold leading-[46px] lg:leading-[70px] uppercase">
        Teryaev Andrey
      </h1>
      <h2 className="text-[45px] font-medium leading-[52px]">
        {speciality}
        <span className="animate-pulse">|</span>
      </h2>
      <p className="text-xl mt-3 md:text-left w-full more-md:mt-7 max-w-[500px]">
        Добро пожаловать на мой сайт-портфолио! Здесь вы найдете мои проекты,
        созданные с использованием различных инструментов.
      </p>

      <Link
        className="bg-btn-gradient py-5 px-9 min-h-[60px] rounded-main flex justify-center items-center mt-7 ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1]"
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
