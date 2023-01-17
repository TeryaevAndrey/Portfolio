import React, { FC } from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 15px;
`;

interface IContainer {
  children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
