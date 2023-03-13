import Image from "next/image";
import React, { FC } from "react";

const Avatar: FC = () => {
  const [radius, setRadius] = React.useState({
    tl: 150,
    tr: 85,
    bl: 100,
    br: 80,
  });

  React.useEffect(() => {
    const changeRadius = setInterval(() => {
      setRadius({
        tl: Math.round(Math.random() * (320 - 40) + 1),
        tr: Math.round(Math.random() * (250 - 40) + 1),
        bl: Math.round(Math.random() * (230 - 40) + 1),
        br: Math.round(Math.random() * (320 - 40) + 1),
      });
    }, 1000);

    return () => clearInterval(changeRadius);
  }, []);

  const styles = {
    borderRadius: `${radius.tl}px ${radius.tr}px ${radius.bl}px ${radius.br}px`
  };

  return (
    <div className={`duration-[1250ms] ease-linear w-[270px] h-[270px] more-md:w-[400px] more-md:h-[400px] relative rounded-[40px] more-md:rounded-tl-[${radius.tl}px] more-md:rounded-tr-[${radius.tr}px] more-md:rounded-bl-[${radius.bl}px] more-md:rounded-br-[${radius.br}px] overflow-hidden mt-11 md:mt-0`}
        style={styles}
    >
      <Image
        className="object-contain"
        src="/img/avatar-2.png"
        alt="avatar"
        loading="lazy"
        fill={true}
      />
    </div>
  );
};

export default Avatar;
