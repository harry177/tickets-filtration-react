export const stopsTransformer = (stops: string) => {
  let labelText = "";
  switch (stops) {
    case "all":
      labelText = "Все";
      break;
    case "0":
      labelText = "Без пересадок";
      break;
    case "1":
      labelText = `${stops} пересадка`;
      break;
    default:
      labelText = `${stops} пересадки`;
      break;
  }
  return labelText;
};
