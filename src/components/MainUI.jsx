import React, { useRef } from "react";

import { MainLayout } from "../styled-components/layout.styled.component";
import { useCreateChart } from "../hooks/useCreateChart";

function MainUI() {
  const chartContainer = useRef(null);
  useCreateChart(chartContainer);

  return (
    <MainLayout>
      <canvas ref={chartContainer} />
    </MainLayout>
  );
}

export { MainUI };
