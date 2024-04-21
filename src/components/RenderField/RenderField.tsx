import { useState } from "react";
import { FilterBlock } from "../FilterBlock/FilterBlock";
import { TicketBlock } from "../TicketBlock/TicketBlock";
import "./render-field.css";

export const RenderField = () => {
  const [currency, setCurrency] = useState<string>("RUB");
  const [stops, setStops] = useState<string[]>([]);
  const handleCurrency = (cur: string) => {
    setCurrency(cur);
  }
  const handleStops = (stops: string[]) => {
    setStops(stops);
  }
  return (
    <main className="main">
      <FilterBlock dispatchCurrency={handleCurrency} dispatchStops={handleStops}/>
      <TicketBlock currency={currency} stops={stops} />
    </main>
  );
};
