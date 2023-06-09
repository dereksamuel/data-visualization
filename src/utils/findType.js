const findType = (kindOfGraph) => {
  const result = {
    Barras: "bar",
    Líneas: "line",
    Dona: "doughnut",
    Torta: "pie",
    Radar: "radar",
  };

  return result[kindOfGraph] || result["Barras"];
};

export { findType };
