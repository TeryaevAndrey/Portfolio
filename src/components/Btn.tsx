import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  max-width: 250px;
  width: 100%;
  min-height: 56px;
  border-radius: 20px;
  border: 2px solid #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  padding: 14px 30px;
  background-color: transparent;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #fbfbfb;
    color: #175b1c;
  }
`;

interface IBtn {
  title: string;
  style?: object;
  onClick?: React.MouseEventHandler;
}

const Btn: FC<IBtn> = ({ title, style, onClick }) => {
  return (
    <Wrapper style={style} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

export default Btn;