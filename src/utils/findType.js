const findType = (kindOfGraph) => {
  const result = {
    Barras: "bar",
    Líneas: "line",
    Dona: "doughnut",
    Torta: "pie",
    Burbujas: "bubble",
  };

  return result[kindOfGraph] || result["Barras"];
};

export { findType };
