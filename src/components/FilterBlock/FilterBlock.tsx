import { CurrencyTabs } from "../CurrencyTabs/CurrencyTabs";
import { StopFilters } from "../StopFilters/StopFilters";
import "./filter-block.css";

interface FilterBlockProps {
  dispatchCurrency: (cur: string) => void;
}

export const FilterBlock = ({ dispatchCurrency }: FilterBlockProps) => {
  const forwardCurrency = (cur: string) => {
    dispatchCurrency(cur);
  };
  return (
    <div className="filter-block">
      <div className="currency-container">
        <p className="filter-header">валюта</p>
        <CurrencyTabs dispatchCurrency={forwardCurrency} />
      </div>
      <div className="filter-container">
        <p className="filter-header">количество пересадок</p>
        <StopFilters />
      </div>
    </div>
  );
};
