import { useState } from "react";
import { FilterBlock } from "../FilterBlock/FilterBlock";
import { TicketBlock } from "../TicketBlock/TicketBlock";
import "./render-field.css";

export const RenderField = () => {
  const [currency, setCurrency] = useState<string>("RUB");
  const handleCurrency = (cur: string) => {
    setCurrency(cur);
  }
  return (
    <main className="main">
      <FilterBlock dispatchCurrency={handleCurrency}/>
      <TicketBlock currency={currency}/>
    </main>
  );
};
