import React, {FC} from 'react';
import styled from 'styled-components';
import SocialsLink from './SocialsLink';
import {BsGithub} from "react-icons/bs";
import {FaTelegram} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Socials: FC = () => {
  return (
    <Wrapper>
      <SocialsLink href="https://github.com/TeryaevAndrey" img={<BsGithub style={{width: "100%", height: "100%"}} />} />
      <SocialsLink href="https://t.me/teryaev2004" img={<FaTelegram style={{width: "100%", height: "100%"}} />} />
      <SocialsLink href="mailto:teryaev.2004@mail.ru" img={<MdOutlineAlternateEmail style={{width: "100%", height: "100%"}} />} />
    </Wrapper>
  );
};

export default Socials;