import React, { FC } from "react";
import styled from "styled-components";
import Container from "../Container";
import Title from "../Title";
import WorksList from "./WorksList";

const Works: FC = () => {
  return (
    <section id="portfolio">
      <Container>
        <Title title="Список работ" />
        <WorksList />
      </Container>
    </section>
  );
};

export default Works;
