import React, { FC } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 50px;
  border-radius: 10px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 55px;
`;

interface ISkillsItem {
  title: string;
}

const SkillsItem: FC<ISkillsItem> = ({title}) => {
  return (
    <Wrapper>
      {title}
    </Wrapper>
  );
};

export default SkillsItem;