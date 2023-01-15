import React, { FC } from "react";
import styled from "styled-components";
import SocialsLink from "../Socials/SocialsLink";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCaretRight } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #000;
  cursor: pointer;
  z-index: 1;

  &:hover div {
    top: 0;
  }
`;

const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #110e0e;
`;

const DemoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
`;

const InfoBlock = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  gap: 6px;
  padding: 20px;
  transition: all 0.2s ease;
`;

const InfoSkill = styled.span`
  display: inline-block;
  font-size: 15px;
  position: relative;
  padding-left: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const WorksItem: FC = () => {
  return (
    <Wrapper>
      <Banner>
        <InfoBlock>
          <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
            <InfoSkill>JavaScript</InfoSkill>
            <InfoSkill>HTML</InfoSkill>
            <InfoSkill>CSS</InfoSkill>
          </div>
        </InfoBlock>
        <BannerImg src="/images/banner.jpg" alt="banner" />
      </Banner>
      <Footer>
        <SocialsLink
          style={{ width: "35px", height: "35px" }}
          href="#"
          img={<BsGithub style={{ width: "100%", height: "100%" }} />}
        />
        <DemoLink href="#">
          <span>Демо</span>
          <AiOutlineCaretRight />
        </DemoLink>
      </Footer>
    </Wrapper>
  );
};

export default WorksItem;
