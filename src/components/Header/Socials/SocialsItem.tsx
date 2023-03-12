import Image from "next/image";
import React, { FC } from "react";

interface ISocialsItem {
  logo: string;
  alt: string;
}

const SocialsItem: FC<ISocialsItem> = ({ logo, alt }) => {
  return (
    <div className="bg-social-gradient w-[50px] h-[50px] rounded-[15px] flex justify-center items-center">
      <Image src={logo} alt={alt} width="30" height="30" />
    </div>
  );
};

export default SocialsItem;
