import React, { FC } from "react";

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }) => {
  return (
    <h3 className="text-2xl text-center more-md:text-left more-md:text-[40px] font-medium text-white">
      {title}
    </h3>
  );
};

export default Title;
