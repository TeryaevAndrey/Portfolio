import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ISocialsItem {
  href: string;
  logo: string;
  alt: string;
}

const SocialsItem: FC<ISocialsItem> = ({ href, logo, alt }) => {
  return (
    <Link
      href={href}
      className="bg-social-gradient w-[50px] h-[50px] rounded-[15px] flex justify-center items-center group/wrapper"
    >
      <Image
        className="group-hover/wrapper:scale-[1.1] ease-linear duration-150"
        src={logo}
        alt={alt}
        width="30"
        height="30"
      />
    </Link>
  );
};

export default SocialsItem;
