import "./ticket-block.css";
import storage from "../../../tickets.json";
import { Ticket } from "../Ticket/Ticket";

interface TicketBlockProps {
  currency: string;
  stops: string[];
}

export const TicketBlock = ({currency, stops}: TicketBlockProps) => {
  const filteredTickets = storage.tickets.filter((item) => stops.includes(item.stops.toString()))
  return (
    <div className="ticket-block">
      {filteredTickets.length !== 0 && filteredTickets.map((item, index) => {
        return <Ticket key={index} content={item} currency={currency} />;
      })}
      {filteredTickets.length === 0 && <div className="no-tickets">Нет подходящих билетов</div>}
    </div>
  );
};
