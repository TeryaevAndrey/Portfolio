import React, { FC } from "react";
import { Link } from "react-scroll";

interface ILinkScroll {
  to: string;
  title: string;
  minH?: number;
  isFlippedGradient?: boolean;
}

const LinkScroll: FC<ILinkScroll> = ({
  to,
  title,
  minH = 40,
  isFlippedGradient = true,
}) => {
  return (
    <Link
      className={`${
        isFlippedGradient ? "bg-btn-flipped-gradient" : "btn-gradient"
      } min-h-[40px] lg:min-h-[${minH}px] px-11 py-2.5 lg:py-5 rounded-main flex justify-center items-center ease-linear duration-150 hover:shadow-[10px_10px_0_#6888b1]`}
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={250}
    >
      {title}
    </Link>
  );
};

export default LinkScroll;
