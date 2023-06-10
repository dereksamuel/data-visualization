import React, { useRef } from "react";

import {
  ContainerChart,
  MainLayout,
} from "../styled-components/layout.styled.component";
import { useCreateChart } from "../hooks/useCreateChart";
import { ContainerMainTitle, SubTitle, Title } from "../styled-components";

function MainUI() {
  const chartContainer = useRef(null);
  const [title] = useCreateChart(chartContainer);

  return (
    <MainLayout>
      <div>
        <ContainerMainTitle>
          <Title>Consumo internacional de Netflix</Title>
          <SubTitle>{title}</SubTitle>
        </ContainerMainTitle>
        <ContainerChart>
          <canvas ref={chartContainer} />
        </ContainerChart>
      </div>
    </MainLayout>
  );
}

export { MainUI };
