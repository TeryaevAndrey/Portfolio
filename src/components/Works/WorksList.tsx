import React, { FC } from "react";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import Btn from "../Btn";
import WorksItem from "./WorksItem";
import { db } from "../../db/db";
import { IWorksItem } from "../../types";

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

  @media (max-width: 768px) {
    margin-top: 30px;
    justify-content: center;
  }

  @media (max-width: 630px) {
    justify-content: center;
  }
`;

const WorksList: FC = () => {
  const worksCollection = collection(db, "works");
  const [works, setWorks] = React.useState<IWorksItem[]>([]);
  const [worksPart, setWorksPart] = React.useState<IWorksItem[]>([]);
  const [isAll, setIsAll] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getWorks = async () => {
      const data = await getDocs(worksCollection);

      setWorks(
        data.docs.map((doc) => ({
          banner: doc.data().banner,
          github: doc.data().github,
          demo: doc.data().demo,
          skills: doc.data().skills,
          id: doc.id,
        }))
      );
    };

    getWorks();
  }, []);

  React.useEffect(() => {
    const arr = works.filter((work: IWorksItem, index: number) => {
      if (window.innerWidth > 768) {
        if (index <= 5) {
          return work;
        }
      } else {
        if (index <= 1) {
          return work;
        }
      }
    });

    setWorksPart(arr);
  }, [works]);

  const showAll = () => {
    setIsAll(!isAll);
  };

  return (
    <Wrapper>
      <List>
        {!isAll
          ? worksPart.map((work) => {
              return (
                <WorksItem
                  key={work.id}
                  banner={work.banner}
                  github={work.github}
                  demo={work.demo}
                  skills={work.skills}
                />
              );
            })
          : works.map((work) => {
              return (
                <WorksItem
                  key={work.id}
                  banner={work.banner}
                  github={work.github}
                  demo={work.demo}
                  skills={work.skills}
                />
              );
            })}
      </List>

      <Btn
        title={isAll ? "Скрыть" : "Показать все"}
        style={{ marginTop: "55px" }}
        onClick={showAll}
      />
    </Wrapper>
  );
};

export default WorksList;
