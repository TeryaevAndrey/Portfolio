import React, { FC } from "react";
import styled from "styled-components";
import Btn from "../Btn";
import WorksItem from "./WorksItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 90px;
  margin-top: 55px;
  flex-wrap: wrap;
  max-width: 933px;
  width: 100%;

  @media(max-width: 768px) {
    margin-top: 30px;
  }

  @media(max-width: 630px) {
    justify-content: center;
  }
`;

const WorksList: FC = () => {
  return (
    <Wrapper>
      <List>
        <WorksItem />
        <WorksItem />
        <WorksItem />
        <WorksItem />
      </List>

      <Btn title="Еще" style={{marginTop: "55px"}} />
    </Wrapper>
  );
};

export default WorksList;
