import "./ticket-block.css";
import storage from "../../../tickets.json";
import { Ticket } from "../Ticket/Ticket";

interface TicketBlockProps {
  currency: string;
}

export const TicketBlock = ({currency}: TicketBlockProps) => {
  return (
    <div className="ticket-block">
      {storage.tickets.map((item, index) => {
        return <Ticket key={index} content={item} currency={currency} />;
      })}
    </div>
  );
};
