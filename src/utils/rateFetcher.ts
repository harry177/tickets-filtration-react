export const rateFetcher = async (cur: string) => {
  const usdLink =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
  const eurLink =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
  const targetLink = cur === "USD" ? usdLink : cur === "EUR" ? eurLink : "";
  if (!targetLink) {
    return { rate: 1, symbol: "₽" };
  }
  const response = await fetch(targetLink);
  const data = await response.json();
  const rate = cur === "USD" ? data.usd.rub : data.eur.rub;
  const symbol = cur === "USD" ? "$" : "€";
  return { rate, symbol };
};
