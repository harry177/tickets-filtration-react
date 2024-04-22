import { ChangeEvent, useEffect, useState } from "react";
import './price-sorter.css';

interface PriceSorterProps {
    dispatchSorting: (option: string) => void;
}

export const PriceSorter = ({dispatchSorting}: PriceSorterProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(ev.target.value);
  };

  useEffect(() => {
    dispatchSorting(selectedOption);
  }, [selectedOption]);
  
  return (
    <>
      <label className="sorter-label">
        <input
          type="radio"
          value="up"
          checked={selectedOption === "up"}
          onChange={handleOptionChange}
        />
        <span className="sorter-text">Самые дешевые</span>
      </label>
      <label className="sorter-label">
        <input
          type="radio"
          value="down"
          checked={selectedOption === "down"}
          onChange={handleOptionChange}
        />
        <span className="sorter-text">Самые дорогие</span>
      </label>
    </>
  );
};
