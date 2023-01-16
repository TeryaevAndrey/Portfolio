import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';
import SkillsItem from './SkillsItem';

const Inner = styled.div`
  position: relative;
  display: flex;
  justify-contnet: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 55px;
`;

const SkillsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  @media(max-width: 768px) {
    gap: 25px;
  }
`;

const Skills: FC = () => {
  return (
    <section id="skills">
      <Container>
        <Title title="Список навыков" />
        <Inner>
          <SkillsList>
            <SkillsItem title="HTML" />
            <SkillsItem title="CSS" />
            <SkillsItem title="JavaScript" />
            <SkillsItem title="Sass/Scss" />
            <SkillsItem title="Less" />
            <SkillsItem title="Webpack" />
            <SkillsItem title="Git" />
            <SkillsItem title="NodeJs" />
            <SkillsItem title="Express" />
            <SkillsItem title="MongoDb" />
            <SkillsItem title="React" />
            <SkillsItem title="ReactNative" />
            <SkillsItem title="NextJs" />
            <SkillsItem title="Redux Toolkit" />
            <SkillsItem title="styled-components" />
            <SkillsItem title="MaterialUI" />
            <SkillsItem title="TailwindCss" />
          </SkillsList>
        </Inner>
      </Container>
    </section>
  );
};

export default Skills;