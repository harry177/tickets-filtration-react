import { CurrencyTabs } from "../CurrencyTabs/CurrencyTabs";
import { StopFilters } from "../StopFilters/StopFilters";
import "./filter-block.css";

export const FilterBlock = () => {
  return (
    <div className="filter-block">
      <div className="currency-container">
        <p className="filter-header">валюта</p>
        <CurrencyTabs />
      </div>
      <div className="filter-container">
        <p className="filter-header">количество пересадок</p>
        <StopFilters />
      </div>
    </div>
  );
};
