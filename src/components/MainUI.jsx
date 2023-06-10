import React, { useRef } from "react";

import {
  ContainerChart,
  ContainerMain,
  MainLayout,
} from "../styled-components/layout.styled.component";
import { useCreateChart } from "../hooks/useCreateChart";
import { ContainerMainTitle, SubTitle, Title } from "../styled-components";

function MainUI() {
  const chartContainer = useRef(null);
  const [title] = useCreateChart(chartContainer);

  return (
    <MainLayout>
      <ContainerMain>
        <ContainerMainTitle>
          <Title>Consumo internacional de Netflix</Title>
          <SubTitle>{title}</SubTitle>
        </ContainerMainTitle>
        <ContainerChart>
          <canvas ref={chartContainer} />
        </ContainerChart>
      </ContainerMain>
    </MainLayout>
  );
}

export { MainUI };
