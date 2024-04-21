import { useEffect, useState } from "react";
import "./currency-tabs.css";

interface CurrencyTabsProps {
    dispatchCurrency: (cur: string) => void;
  }

export const CurrencyTabs = ({dispatchCurrency}: CurrencyTabsProps) => {
    const [tab, setTab] = useState<string>("RUB");
    const handleTabClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        const clickedTab = ev.currentTarget.textContent;
        clickedTab && setTab(clickedTab);
    }

    useEffect(() => {
        dispatchCurrency(tab);
    })
    return <div className="tabs">
        <div className={`currency-tab ${tab === "RUB" ? "tab-active" : "tab-inactive"}`} onClick={handleTabClick}>RUB</div>
        <div className={`currency-tab ${tab === "USD" ? "tab-active" : "tab-inactive"}`} onClick={handleTabClick}>USD</div>
        <div className={`currency-tab ${tab === "EUR" ? "tab-active" : "tab-inactive"}`} onClick={handleTabClick}>EUR</div>
    </div>
}