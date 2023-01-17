import React, { FC } from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 25px;
    font-weight: 700;
    line-height: 34px;
  }
`;

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }) => {
  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;
