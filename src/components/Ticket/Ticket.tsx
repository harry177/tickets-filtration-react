import { useEffect, useState } from "react";
import { dateTransformer } from "../../utils/dateTransformer";
import { logoRetriever } from "../../utils/logoRetriewer";
import { rateFetcher } from "../../utils/rateFetcher";
import "./ticket.css";

interface TicketProps {
  content: {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
  };
  currency: string;
}

export const Ticket = ({ content, currency }: TicketProps) => {
  const [priceCurrency, setPriceCurrency] = useState<{
    rate: number;
    symbol: string;
  }>({ rate: 1, symbol: "₽" });

  useEffect(() => {
    const fetchCurrency = async () => {
      const currencyData = await rateFetcher(currency);
      setPriceCurrency(currencyData);
    };
    fetchCurrency();
  }, [currency]);

  return (
    <div className="ticket">
      <div className="ticket-left">
        <img
          src={logoRetriever(content.carrier)}
          alt=""
          className="carrier-logo"
        ></img>
        <button className="buy-button">
          Купить за <br />
          {priceCurrency.symbol !== "₽"
            ? (content.price / priceCurrency.rate).toFixed(2)
            : content.price}{" "}
          {priceCurrency.symbol}
        </button>
      </div>
      <div className="ticket-right">
        <div className="time-area">
          <div className="time-area__number">{content.departure_time}</div>
          <div className="time-area__center">
            <span>
              {content.stops !== 0 && content.stops}{" "}
              {content.stops > 1
                ? "пересадки"
                : content.stops === 1
                ? "пересадка"
                : "без пересадок"}
            </span>
            <div className="time-arrow"></div>
          </div>
          <div className="time-area__number">{content.arrival_time}</div>
        </div>
        <div className="details-area">
          <div className="details-info">
            <span className="details-place">
              {content.origin}, {content.origin_name}
            </span>
            <span>{dateTransformer(content.departure_date)}</span>
          </div>
          <div className="details-info">
            <span className="details-place">
              {content.destination_name}, {content.destination}
            </span>
            <span>{dateTransformer(content.arrival_date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
