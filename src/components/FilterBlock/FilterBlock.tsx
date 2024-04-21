import { useEffect, useState } from "react";
import { CurrencyTabs } from "../CurrencyTabs/CurrencyTabs";
import { StopFilter } from "../StopFilter/StopFilter";
import storage from "../../../tickets.json";
import "./filter-block.css";

interface FilterBlockProps {
  dispatchCurrency: (cur: string) => void;
  dispatchStops: (stops: string[]) => void;
}

export const FilterBlock = ({ dispatchCurrency, dispatchStops }: FilterBlockProps) => {
  const [selectedStops, setSelectedStops] = useState<string[]>(["all", "0", "1", "2", "3"]);
  const forwardCurrency = (cur: string) => {
    dispatchCurrency(cur);
  };

  const stops = [
    ...new Set(storage.tickets.map((item) => item.stops).sort((a, b) => a - b)),
  ];

  const stopsHandleChange = (value: string) => {
    let updatedStops: string[];
  
    if (selectedStops.includes(value) && value !== "all") {
      updatedStops = selectedStops.filter((stop) => stop !== value && stop !== "all");
    } else if (selectedStops.includes(value) && value === "all") {
      updatedStops = selectedStops.filter((stop) => stop !== value);
    }  else if (!selectedStops.includes(value) && value === "all") {
      updatedStops = [...stops.map((item) => item.toString()), value];
    } else {
      updatedStops = [...selectedStops, value];
    }
  
    setSelectedStops(updatedStops);
  };

  useEffect(() => {
    dispatchStops(selectedStops);
  }, [selectedStops])

  

  return (
    <div className="filter-block">
      <div className="currency-container">
        <p className="filter-header">валюта</p>
        <CurrencyTabs dispatchCurrency={forwardCurrency} />
      </div>
      <div className="filter-container">
        <p className="filter-header">количество пересадок</p>
        <div className="filters">{<StopFilter id={"all"} dispatchChange={stopsHandleChange} updater={selectedStops} />}</div>
        {stops.map((item, index) => {
          return <StopFilter key={index} id={item.toString()} dispatchChange={stopsHandleChange} updater={selectedStops} />
        })}
      </div>
    </div>
  );
};
