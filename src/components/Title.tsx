import React, { FC } from "react";

interface ITitle {
  title: string;
  isCenter?: boolean;
}

const Title: FC<ITitle> = ({ title, isCenter = false }) => {
  return (
    <h3
      className={`text-2xl text-center more-md:${
        isCenter ? "text-center" : "text-left"
      } more-md:text-[40px] font-medium text-white`}
    >
      {title}
    </h3>
  );
};

export default Title;
